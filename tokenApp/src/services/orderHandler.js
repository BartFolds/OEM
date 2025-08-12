import axios from 'axios'

// Define the Shopify store and API version
const storeName = process.env.SHOPIFY_STORE_DOMAIN;
const apiVersion = process.env.API_VERSION;

async function getOrderById(id) {
  const query = `
    query getOrder($id: ID!) {
      order(id: $id) {
        id
        name
        createdAt
        lineItems(first: 5) {
          edges {
            node {
              id
              title
              quantity
              customAttributes {
                key
                value
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      `https://${storeName}/admin/api/2023-07/graphql.json`,
      {
        query,
        variables: { id }
      },
      {
        headers: {
          'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_API_TOKEN,
          'Content-Type': 'application/json'
        }
      }
    );

    const order = response.data.data.order;

    if (!order) {
      console.log('No order found for the given ID.');
    } else {
      console.log('Order:', JSON.stringify(order, null, 2));
      const edges = order.lineItems.edges;
      const customTextValues=[];

      edges.forEach(({ node }) =>{
        const custTextAttr = node.customAttributes.find(attr => attr.key === "Custom Text")

        if(custTextAttr && typeof custTextAttr.value === "string") {
          customTextValues.push({
            lineItemId: node.id,
            FordUsername: custTextAttr.value
          })
        }
      })
      console.log(customTextValues)
      return customTextValues
    }
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}