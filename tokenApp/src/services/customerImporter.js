import { createReadStream } from 'fs';
import csv from 'csv-parser';
import prisma from '../prismaClient.js'
/**
 * Safely trims and returns a field or an empty string if missing.
 */
function safeField(value) {
  return value ? value.trim() : '';
}

/**
 * Combines address fields into a normalized full address.
 */
function buildFullAddress(row) {
  const address1 = safeField(row.Address1);
  const address2 = safeField(row.Address2);
  const city = safeField(row.AddressCity);
  const state = safeField(row.DefaultProvinceCode);
  const country = safeField(row.DefaultCountryCode);
  const zip = safeField(row['DefaultAddressZip']);

  // Combine Address1 and Address2 with a space
  const primaryAddress = [address1, address2].filter(Boolean).join(' ');

  // Combine rest with commas
  const locationParts = [city, state, country, zip].filter(Boolean).join(', ');

  // Join full address
  return [primaryAddress, locationParts].filter(Boolean).join(', ');
}

async function importCSV() {
  const customers = []

  const stream = createReadStream('./docs/customers_export.csv').pipe(csv())

  for await (const row of stream) {
    const shopifyId = parseInt (row.ShopifyID)
    if(isNaN(shopifyId)) {
        console.warn('Skipping row with invalid Shopify ID', row)
        continue; 
    }

     const fullAddress = buildFullAddress(row).toString();

     customers.push({
        shopifyId: BigInt(shopifyId),
        firstname: safeField(row.FirstName),
        lastname: safeField(row.LastName),
        email: safeField(row.Email),
        phone: safeField(row.Phone),
        company: safeField(row.Company),
        address: fullAddress,
        fordName: safeField(row.fordUsername)
      });
    }
    
    console.log('CSV file successfully processed');
      for (const customer of customers) {
        try {
          await prisma.user.upsert({ 
            where: {
              shopifyId: customer.shopifyId
            },
            update: {
              fordName: customer.fordName
            },
            create: {
              ...customer
             }
          });
          console.log(`Inserted customer: ${customer.firstname} ${customer.lastname}`);
        } catch (error) {
          console.error('Error inserting customer:', customer, error.message);
        }
      }
      await prisma.$disconnect();
    }

importCSV();
