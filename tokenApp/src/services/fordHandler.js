import axios from 'axios'
import dotenv from 'dotenv' 
import prisma from '../prismaClient.js'

const client = axios.create({
    baseURL: `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/${process.env.API_VERSION}/graphql.json`,
    headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_API_TOKEN,
        'Content-Type': 'application/json'
    }
})

const fiftyPk = 7649524220111
const tenPk = 7588312613071
const oneFord = 7649524613327
const fivePk = 7659904762063
const hundPk = 7659904925903
const software = 7608251384015
const fordIDs = [oneFord, fivePk, tenPk, fiftyPk, hundPk, software]

dotenv.config()

function fordFilter(item) {
    if ( fordIDs.includes(item.product_id))
        return item
    }


function fordHandler(order, username){
    let fords = order.filter(fordFilter)
    let total = 0


    fords.forEach((item) => {
        if (item.product_id == fiftyPk) {
            total += 50
        }
        if (item.product_id == tenPk) {
            total += 10
        }
        if (item.product_id == fivePk){
            total += 5
        }
        if (item.product_id == hundPk){
            total += 100
        }
        else {
            total += 1
        }
        })

    console.log(total)

    return {field1 : username, field2: total}
}

async function getFordNameMeta(custId) {
    const user = await prisma.user.findUnique({
        where: {
            shopifyId: custId
        },
        select: {
            fordNames: {
                select: {
                    name: true,
            },
        },
    },
})
   

    console.log(user)

    //const nameValue = user.fordNames[0].name
    //console.log(nameValue)
    if(user.fordNames.length > 0){
        const nameValue = user.fordNames[0].name
        return nameValue
    }

    const query = `
    query GetCustomers($query: String!) {
        customers(first: 1, query: $query) {
            edges {
                node {
                    metafield(namespace: "custom", key: "fordUsername") {
                        value
                    }
                }
            }
        }
    }`;

  const variables = {
    query: `id:${custId}`
  };
  try{
    const response = await axios.post(
        `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/${process.env.API_VERSION}/graphql.json`,
        { query, variables },
        {
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_API_TOKEN
            }
        }
    );
    //console.log(response)

    const customers = response.data.data.customers
    //console.log(customers)
    if(customers.edges.length === 0 || !customers){
        throw new Error(`No customer found for ${custId}.`)
    }
    const customerEdge = customers.edges[0].node.metafield.value
    
    console.log("retrieved ford name: ", customerEdge)
    return customerEdge
    } catch (error) {  
        console.error('Shopify customer search error:', error.message)
        return { success: false, customer: null}
    } 
}

async function getCustomerByName(name) {
    const splitN = name.split(" ")
  const query = `
    query GetCustomers($query: String!) {
        customers(first: 1, query: $query) {
            edges {
                node {
                    id
                    firstName
                    lastName
                    email
                    phone
                    defaultAddress {
                        company
                        address1
                        address2
                        provinceCode
                        countryCodeV2
                        zip
                        }
                    metafield(namespace: "custom", key: "fordUsername") {
                        value
                    }
                }
            }
        }
    }`;

  const variables = {
    query: `title:${name}`
  };
  try{
    const response = await axios.post(
        `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/${process.env.API_VERSION}/graphql.json`,
        { query, variables },
        {
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_API_TOKEN
            }
        }
    );
    //console.log(response)

    const customers = response.data.data.customers
    console.log(customers)
    if(customers.edges.length === 0 || !customers){
        throw new Error(`No customer found for ${name}.`)
    }

    const customerEdge = customers.edges[0].node;
    console.log(customerEdge.defaultAddress.zip)
    if(!customerEdge){
        throw new Error(`No customer found for ${name}.`)
    }
    const inputFullName = name.trim().toLowerCase()
    const shopifyFullName = (`${customerEdge.firstName} ${customerEdge.lastName}`).toLowerCase()
    const isMatch = inputFullName === shopifyFullName
    console.log(isMatch)
    if (isMatch == false) {
        throw new Error(`No customer found for ${name}. Query responded with ${customerEdge.firstName} ${customerEdge.lastName}`);
    }
    console.log(`customer: ${name}`, customerEdge)
    return { success : true, customer: customerEdge}

    
    }catch (error) {  
        console.error('Shopify customer search error:', error.message)
        return { success: false, customer: null}
    } 
}


async function getCustomerById(id) {
  const query = `
    query GetCustomers($query: String!) {
        customers(first: 1, query: $query) {
            edges {
                node {
                    id
                    firstName
                    lastName
                    email
                    phone
                    defaultAddress {
                        company
                        address1
                        address2
                        provinceCode
                        countryCodeV2
                        zip
                        }
                    metafield(namespace: "custom", key: "fordUsername") {
                        value
                    }
                }
            }
        }
    }`;

  const variables = {
    query: `id:${id}`
  };
  try{
    const response = await axios.post(
        `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/${process.env.API_VERSION}/graphql.json`,
        { query, variables },
        {
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_API_TOKEN
            }
        }
    );
    //console.log(response)

    const customers = response.data.data.customers
    console.log(customers)
    if(customers.edges.length === 0 || !customers){
        throw new Error(`No customer found for ${id}.`)
    }

    const customerEdge = customers.edges[0].node;
    console.log(customerEdge.defaultAddress.zip)
    if(!customerEdge){
        throw new Error(`No customer found for ${id}.`)
    }
    //const inputFullName = name.trim().toLowerCase()
    //const shopifyFullName = (`${customerEdge.firstName} ${customerEdge.lastName}`).toLowerCase()
    //const isMatch = inputFullName === shopifyFullName
    //console.log(isMatch)
    //if (isMatch == false) {
      //  throw new Error(`No customer found for ${name}. Query responded with ${customerEdge.firstName} ${customerEdge.lastName}`);
    //}
    //console.log(`customer: ${name}`, customerEdge)
    return { success : true, customer: customerEdge}

    
    }catch (error) {  
        console.error('Shopify customer search error:', error.message)
        return { success: false, customer: null}
    } 
}


export { fordHandler, fordFilter, fordIDs, getFordNameMeta, getCustomerById, getCustomerByName }