import client from '../redisClient.js'

const redisClient = client;

const WEBHOOK_TTL = 600; // seconds (10 minutes)

async function preventDuplicates(req, res, next) {
  const webhookId = req.header('X-Shopify-Webhook-Id');
  if (!webhookId) return res.status(400).send('Missing Webhook ID');

  const key = `webhook:${webhookId}`;
  const alreadyProcessed = await redisClient.exists(key);

  if (alreadyProcessed) {
    console.log(`Duplicate webhook detected: ${webhookId}`);
    return res.status(200).send('Already Processed');
  }

  await redisClient.set(key, 'processed', { EX: WEBHOOK_TTL }); // Auto-expire

  next(); 
}

export default preventDuplicates; 