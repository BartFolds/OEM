import axios from 'axios'
import { createReadStream, write, existsSync, mkdirSync, writeFileSync} from 'fs';
import csv from 'csv-parser';
import prisma from '../prismaClient.js'
import {buildFullAddress, formatAddress} from './shopifyHandler.js'
import { getCustomerByName } from './fordHandler.js';
import path from 'path'
import { fileURLToPath } from 'url';
import { Parser } from 'json2csv'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Safely trims and returns a field or an empty string if missing.
 */
function safeField(value) {
  return value ? value.trim() : '';
}
function fordCompare(name1, name2) { //name1 is from the excel sheet, name2 is from shopify. Keep name1 as the name if it name 2 !exists
    if((name1 && !name2) || name2 != name1){
        return name1
    } else { return name2}
}
 

function writeUnmatchedToCSV(rows, filename = 'unmatched_customers.csv') {
  if (rows.length === 0) {
    console.log('✅ All customers matched. No unmatched rows to write.');
    return;
  }
  const outputDir = path.join('C:', 'oemapp', 'tokenApp', 'docs', 'output')
  
  if(!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true})
  }

  const outputPath = path.join(outputDir, filename)

  try {
    const parser = new Parser(); // Uses keys from first object by default
    const csv = parser.parse(rows);
    writeFileSync(outputPath, csv);
    console.log(`📁 Wrote ${rows.length} unmatched rows to ${outputPath}`);
  } catch (err) {
    console.error('❌ Failed to write unmatched CSV:', err.message);
  }
}

const client = axios.create({
    baseURL: `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/${process.env.API_VERSION}/graphql.json`,
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_API_TOKEN  
    }
})
 
const unmatchedUsers = []

async function importCSV() {
  const customers = []
 

  const stream = createReadStream('./docs/oemCustomersFORD-Sheet1.csv').pipe(csv())

  for await (const row of stream) {
    const fullName = row.name?.trim()
    if (!fullName || fullName === "") {
        unmatchedUsers.push(row);
        console.log('Skipping row with no Name', row) 
    } 
    const custPull = await getCustomerByName(fullName)
     if (!custPull.success || !custPull.customer) {
            console.log(custPull.success)
            unmatchedUsers.push(row)
            continue;
        }
    if (!custPull || typeof custPull !== 'object') {
        console.warn('Unexpected result from getCustomerByName:', custPull);
        unmatchedUsers.push(row);
        continue;
    }   
    const cust = custPull.customer

    console.log("found customer: ", cust.firstName)

    //const fullAddress = buildFullAddress(cust.defaultAddress);
    const fullAddress = formatAddress(cust.defaultAddress)
    //console.log(fullAddress)
    const shopifyId = cust.id.slice(23)
    console.log(shopifyId)
    let fUser= row.newUsername  
    

    customers.push({
        shopifyId: BigInt(shopifyId),
        firstname: safeField(cust.firstName),
        lastname: safeField(cust.lastName),
        email: safeField(cust.email),
        phone: safeField(cust.phone),
        company: safeField(cust.company),
        address: fullAddress,
        fordName: safeField(fUser),
        hwid: safeField(row.HWID)
      })
    

    console.log('CSV file successfully processed');
    }
    for (const customer of customers) {
        try {
        await prisma.user.upsert({ 
        where: {
            shopifyId: customer.shopifyId
        },
        update: {
            software: true,
            fordNames: {
                create: 
                    {
                        name: customer.fordName, 
                        HWID: customer.hwid
                    }   
            }   
        },
        create: {
            shopifyId: customer.shopifyId,
            firstname: customer.firstname, 
            lastname: customer.lastname, 
            email: customer.email, 
            phone: customer.phone,
            company: customer.company,
            address: customer.address,
            software: true,
            fordNames: {
                create: {
                    name: customer.fordName,
                    HWID: customer.hwid
                }
            }
        }
    });
          console.log(`Inserted customer: ${customer.firstname} ${customer.lastname}`);
        } catch (error) {
          console.error('Error inserting customer:', customer, error.message);
        }
      }
      await prisma.$disconnect();
    } 

export {fordCompare} 

await importCSV();
writeUnmatchedToCSV(unmatchedUsers); 

