import crypto from 'crypto'
const SHOPIFY_SECRET = process.env.SHOPIFY_WEBHOOK_SECRET 

function generateHmac(rawBody) {
  return crypto
    .createHmac('sha256', SHOPIFY_SECRET)
    .update(rawBody, 'utf8')
    .digest('base64');
}

export { generateHmac };
