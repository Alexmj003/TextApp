import express from 'express';
import { sendMessage } from '../services/twilioService.js';
import { scheduleJob } from '../scheduler/jobScheduler.js';
import { validateMessage } from '../utils/validateMessages.js';

const router = express.Router();

// POST /api/messages/send
// Sends a message immediately
router.post('/send', async (req, res) => {
  const { to, body, mediaUrl } = req.body;

  // Validate message format
  if (!validateMessage(req.body)) {
    return res.status(400).json({ error: 'Invalid message format' });
  }

  try {
    const result = await sendMessage({ to, body, mediaUrl });
    res.json({ success: true, sid: result.sid });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/messages/schedule
// Schedules a message for future delivery
router.post('/schedule', (req, res) => {
  const { to, body, mediaUrl, scheduledAt } = req.body;

  // Validate message and scheduling time
  if (!validateMessage(req.body) || !scheduledAt) {
    return res.status(400).json({ error: 'Invalid scheduling format' });
  }

  try {
    scheduleJob({ to, body, mediaUrl, scheduledAt });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;