// Load Twilio SDK and environment variables
import twilio from 'twilio';

// Create Twilio client using credentials from .env
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

/**
 * Sends a message using Twilio
 * @param {Object} param0 - Message details
 * @param {string} param0.to - Recipient phone number
 * @param {string} param0.body - Message text
 * @param {string} [param0.mediaUrl] - Optional media URL for MMS
 */
export async function sendMessage({ to, body, mediaUrl }) {
  return client.messages.create({
    to,
    from: process.env.TWILIO_PHONE_NUMBER,
    body,
    ...(mediaUrl && { mediaUrl }), // Only include mediaUrl if it's provided
  });
}