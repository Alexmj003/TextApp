import cron from 'node-cron';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { sendMessage } from '../services/twilioService.js';

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to local JSON file storing scheduled messages
const storageDir = path.join(__dirname, '../storage');
const storagePath = path.join(storageDir, 'scheduledMessages.json');

// Load scheduled messages from file
function loadScheduledMessages() {
  if (!fs.existsSync(storagePath)) return [];
  return JSON.parse(fs.readFileSync(storagePath));
}

// Save updated list of scheduled messages to file
function saveScheduledMessages(messages) {
  // Ensure the storage directory exists before writing the file
  if (!fs.existsSync(storageDir)) {
    fs.mkdirSync(storageDir, { recursive: true });
  }
  fs.writeFileSync(storagePath, JSON.stringify(messages, null, 2));
}

/**
 * Adds a message to the schedule
 * @param {Object} message - Message details including scheduledAt
 */
export function scheduleJob({ to, body, mediaUrl, scheduledAt }) {
  const messages = loadScheduledMessages();
  messages.push({ to, body, mediaUrl, scheduledAt });
  saveScheduledMessages(messages);
}

/**
 * Starts the scheduler loop
 * Runs every minute to check for messages that should be sent
 */
export function startScheduler() {
  cron.schedule('* * * * *', async () => {
    const now = new Date();
    let messages = loadScheduledMessages();

    // Filter messages that are due to be sent
    const toSend = messages.filter(msg => new Date(msg.scheduledAt) <= now);

    for (const msg of toSend) {
      try {
        await sendMessage(msg);
        console.log('Scheduled message sent:', msg);
      } catch (err) {
        console.error('Failed to send scheduled message:', err.message);
      }
    }

    // Keep only future messages
    messages = messages.filter(msg => new Date(msg.scheduledAt) > now);
    saveScheduledMessages(messages);
  });
}

export { scheduleJob, startScheduler };