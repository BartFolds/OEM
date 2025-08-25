import { createClient } from 'redis'

const redisUrl = process.env.REDIS_URL 
const client = createClient({
  url: redisUrl,
});

client.on('error', (err) => {
  console.error('❌ Redis Client Error:', err);
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

// Immediately connect (you can also export a promise if needed)
client.connect();

export default client