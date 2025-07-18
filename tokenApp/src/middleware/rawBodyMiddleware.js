// rawBodyMiddleware.js
import express from 'express'

/**
 * Middleware to capture raw body needed for HMAC verification
 * Usage: app.use('/webhook', rawBodyMiddleware)
 */
const rawBodyMiddleware = express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf.toString('utf8'); // Save raw body for HMAC
  }
});

export default rawBodyMiddleware;