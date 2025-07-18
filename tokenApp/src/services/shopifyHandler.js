import prisma from '../prismaClient.js'

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
const fordIDs = [oneFord, fivePk, tenPk, fiftyPk, hundPk, software]

// function to generate multiple token numbers if the order has more than one token (eg 1111, 1111-1, 1111-2 etc)
function updateOrderNums(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      arr[i]['orderNumber'] = `${num}`;
    } else {
      arr[i]['orderNumber'] = `${num}-${i}`;
    }
  }
  return arr;
}

function safeField(value) {
  return value ? value.toString().trim() : '';
}

// composes address field out of the shopify webhook data
function buildFullAddress(input) {
  const address1 = safeField(input.address1);
  const address2 = safeField(input.address2);
  const city = safeField(input.city);
  const state = safeField(input.province_code);
  const country = safeField(input.country_code);
  const zip = safeField(input['zip']);

  // Combine Address1 and Address2 with a space
  const primaryAddress = [address1, address2].filter(Boolean).join(' ');

  // Combine rest with commas
  const locationParts = [city, state, country, zip].filter(Boolean).join(', ');

  // Join full address
  return [primaryAddress, locationParts].filter(Boolean).join(', ');
}

//if product quantity is greater than 1, duplicate items.
function expand(items) {
  let expanded = []
  items.forEach((item) => {
    let amount = parseInt(item.quantity)
    if (amount == 1) {
      expanded.push(item)
    } else {
      for(let i = 0;  i < amount ; i++) {
        expanded.push(item)
      }
    }
        
  })
  return expanded
}

//create tokens based off of items
function tokenGeneration(items, num) {
let out = []
items.forEach((item) => {
let tType; 
if(item.product_id === gmID) {
    tType = "GM"
  }
  if(safeField(item.product_id) === safeField(nissanID)) {
    tType = "NISSAN"
  } 
  if(item.product_id === fordRemote) {
    tType = "FORD"
  }
  out.push(
    {orderNumber: num, type: tType, valid: true}
  )
})
  
  return out
}

function formatAddress(address) {
  if (!address) return null;

  const {
    address1,
    address2,
    city,
    provinceCode,
    zip,
    countryCodeV2
  } = address;

  return [address1, address2, city, provinceCode, zip, countryCodeV2]
    .filter(Boolean)
    .join(', ');
}

async function buildCustomer(cust){

  const customer = []
 //const fullAddress = buildFullAddress(cust.defaultAddress);
  const fullAddress = formatAddress(cust.defaultAddress)
     //console.log(fullAddress)
  console.log(cust.id)
  const shopifyId = cust.id.toString().slice(23)
  const fName = cust.metafield.value
  console.log(shopifyId)  
     
  const firstName = cust.firstname
  const lastName = cust.lastname
     customer.push({
         shopifyId: BigInt(shopifyId),
         firstname: safeField(cust.firstName),
         lastname: safeField(cust.lastName),
         email: safeField(cust.email),
         phone: safeField(cust.phone),
         company: safeField(cust.company),
         address: fullAddress,
         //fordName: safeField(cust.metafield.value)
       })
       console.log(customer)
      let pcustomer = customer[0]
    try {
        await prisma.user.upsert({ 
          where: {
            shopifyId: pcustomer.shopifyId
         },
          update: {
            firstname: pcustomer.firstname,
            lastname: pcustomer.lastname, 
            software: true,
            fordNames: {
              connectOrCreate: 
                  {
                    where: { name: fName },
                    create: {name: fName}
                  }   
            }
          },
          create: {
            shopifyId: pcustomer.shopifyId,
            firstname: pcustomer.firstname, 
            lastname: pcustomer.lastname, 
            email: pcustomer.email, 
            phone: pcustomer.phone,
            company: pcustomer.company,
            address: pcustomer.address,
            software: true,
            fordNames: {
              connectOrCreate: {
                where: { name: fName },
                create: { name: fName}
                }
            }
        }
  });
          console.log(`Inserted customer: ${pcustomer.firstname} ${pcustomer.lastname}`);
          return({"success": true, "customer": customer.firstname})
        } catch (error) {
          console.error('Error inserting customer:', customer, error.message);
        }
      
}

export{buildFullAddress, expand, tokenGeneration, updateOrderNums, formatAddress, buildCustomer, safeField}