import express from 'express'
import axios from 'axios'
import prisma from '../prismaClient.js'
import crypto from "crypto"
import dotenv from 'dotenv'
import {getFordNameMeta, fordHandler, fordIDs} from '../services/fordHandler.js'
import {buildFullAddress, safeField, expand, tokenGeneration, updateOrderNums} from '../services/shopifyHandler.js'


// Use these if we are going to push data to shopify, probably not
// const API_KEY = process.env.SHOPIFY_API_KEY
// const BASE_URL = "https://{store_name}.myshopify.com/admin/api/2025-04/graphql.json"

const router = express.Router()
//ids for remote programming
const gmID = 7596341657807
const nissanID = 7530463756495
const fordRemote = 0
//ids for Ford calculator tokens
const fiftyPk = 7649524220111
const tenPk = 7588312613071
const oneFord = 7649524613327
const fivePk = 7659904762063
const hundPk = 7659904925903
const software = 7608251384015
const targetIDs = [gmID, nissanID, oneFord, fiftyPk, tenPk, fivePk, hundPk, software]
const remoteIDs = [gmID, nissanID, fordRemote]
//const fordIDs = [oneFord, fivePk, tenPk, fiftyPk, hundPk, software]

dotenv.config() 



//function to verify webhook
function verifyShop(req) {
  const hmacHeader = req.headers["x-shopify-hmac-sha256"]; 
  console.log(hmacHeader)
  if(!hmacHeader) return false; 

  const secret = process.env.SHOPIFY_WEBHOOK_SECRET
  if(!secret){
    throw new Error('SHOPIFY_WEBHOOK_SECRET NOT FOUND')
  }
  const generatedHash = crypto
    .createHmac("sha256", secret)
    .update(req.rawBody, "utf8")
    .digest('base64');


  //console.log("Raw body length:", req.rawBody.length);
  //console.log("Raw body snippet:", req.rawBody.slice(0, 100));  
  //console.log("Generated Hash:", generatedHash)
  //console.log("Shopify HMAC", hmacHeader)
    
    return crypto.timingSafeEqual(
      Buffer.from(generatedHash),
      Buffer.from(hmacHeader)
      );
}


// router recieves webhook
router.post("/", async (req, res) => {
  if(!verifyShop(req)) {
    console.log("Unauthorized request")
    return res.status(401).send("Unauthorized")
  }
  
  const order = req.body

  console.log(order)

  const productCheck = order.line_items.some(item =>
    targetIDs.includes(item.product_id)
  )
  //only run program if order contains tokens or ford software
  if (productCheck) {
    console.log ("Order contains tokens", order.id, order.order_number)

    const orderNum = order.order_number;

    const fullAddress = buildFullAddress(order.customer.default_address)
    console.log(fullAddress)
    
    
    // filter line items array to only contain relevant items
    
    let relItems = order.line_items.filter((item) => {
      if (targetIDs.includes(item.product_id)) {
        return item
      }
    })

    console.log("relItems", relItems.length)
   //expand array to include each item with quantity greater than 1
    let fullList = expand(relItems)
    console.log("full length: ", fullList.length)


    
    //check to see if we are handling remote programming tokens or ford calculator tokens.
    //if programming tokens, filter those tokens, and save tokens to DB, if not send to ford handler

    let remote = fullList.filter((item)=>{
      if (remoteIDs.includes(item.product_id)){
        return item
      }
    })

    let calc = fullList.filter((item)=>{
      if (fordIDs.includes(item.product_id)){
        return item
      }
    })

    if(remote.length > 0) {
      // create tokens
      console.log("Generating tokens")
      const tokenArray = tokenGeneration(remote, orderNum)
      console.log(...tokenArray)
      const allTokens = updateOrderNums(tokenArray, orderNum)
      console.log("updated order numbers", ...allTokens)

    //check if user exists, if not create a new user. If the user exists, add tokens to that user

        const user = await prisma.user.upsert({
            where: {
              shopifyId: BigInt(order.customer.id)
            },
            update: {
              email: safeField(order.customer.email),
              phone: safeField(order.customer.phone),
              tokens: {
                create: [
                  ...allTokens
                ]
              }
            },
            create: {
              shopifyId: BigInt(order.customer.id),
              firstname: safeField(order.customer.first_name),
              lastname: safeField(order.customer.last_name),
              email: safeField(order.customer.email),
              phone: safeField(order.customer.phone),
              company: safeField(order.customer.default_address.company),
              address: fullAddress,
              tokens: {
                create: [ ...allTokens ]
              }

            }
        })

        console.log(user)
      } 
      if (calc.length > 0) {
        
        console.log("Retrieving ford username")
        const ford_check = await getFordNameMeta(order.customer.id)
        console.log(ford_check)
        if (!ford_check){
          throw new error("Customer doesn't have a ford username logged.")


        }else{
          console.log("Found ford username: " + ford_check)
          const fordUser = await prisma.user.upsert({
              where: {
                shopifyId: BigInt(order.customer.id)
              },
              update: {
                email: safeField(order.customer.email),
                phone: safeField(order.customer.phone),
                software: true,
                fordNames: {
                  connectOrCreate: {
                    where: { name: ford_check }, 
                    create: { name: ford_check }
                  }
                }
              },
              create: {
                shopifyId: BigInt(order.customer.id),
                firstname: safeField(order.customer.first_name),
                lastname: safeField(order.customer.last_name),
                email: safeField(order.customer.email),
                phone: safeField(order.customer.phone),
                company: safeField(order.customer.default_address.company),
                address: fullAddress,
                software: true,
                fordNames: {
                  connectOrCreate: {
                    where: { name: ford_check },
                    create: { name: ford_check}
                  }
                }
              }
            })

            console.log(fordUser.shopifyId)

           let toPythonBot = fordHandler(calc, fordUser.fordName)
           console.log(toPythonBot.field1, toPythonBot.field2)
           
          // Forward to Python receiver
          await axios.post(process.env.PYTHON_BOT_URL, toPythonBot);
      
          res.status(200).json({ message: 'User processed', user });
          }
      }

  } else {
    console.log("No tokens. Order Ignored", order.id)
  }
  res.status(200).send("Webhook processed")
})

// Add this new test route to send sample data to the bot
router.get('/test-forward', async (req, res) => {
  const sampleData = {
    field1: "bfolds25",
    field2: 3,
  };

  try {
    const response = await axios.post('http://ford-bot:5015/webhook', sampleData);
    res.status(200).send({
      message: "Sample data forwarded to ford-bot successfully",
      botResponse: response.data,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});




export default router




