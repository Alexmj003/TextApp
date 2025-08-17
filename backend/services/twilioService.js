// Load Twilio SDK and environment variables
const twilio = require('twilio')
require('dotenv').config()

// Create Twilio client using credentials from .env
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

/**
 * Sends a message using Twilio
 * @param {Object} param0 - Message details
 * @param {string} param0.to - Recipient phone number
 * @param {string} param0.body - Message text
 * @param {string} [param0.mediaUrl] - Optional media URL for MMS
 */
async function sendMessage({ to, body, mediaUrl }) {
  return client.messages.create({
    to,
    from: process.env.TWILIO_PHONE_NUMBER,
    body,
    ...(mediaUrl && { mediaUrl }) // Only include mediaUrl if it's provided
  })
}

module.exports = { sendMessage }