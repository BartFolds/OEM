import winston from 'winston'
import express from 'express'

// Winston logger configuration
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'webhook.log' })
  ]
});

// Custom logging middleware
const logWebhook = (req, res, next) => {
  const timestamp = new Date().toISOString();

  // Log basic details about the request
  logger.info('Received webhook', {
    timestamp,
    method: req.method,
    url: req.originalUrl,
    body: req.body, // Raw body content
    headers: req.headers
  });

  // Continue to the next middleware or route handler
  next();
};

export default logWebhook