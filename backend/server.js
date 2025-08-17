import express from 'express';
import messageRoutes from './routes/messageRoutes.js';
import { startScheduler } from './scheduler/jobScheduler.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json()); // Parse JSON request bodies

// Mount message routes under /api/messages
app.use('/api/messages', messageRoutes);

// Start the scheduler loop
startScheduler();

// Start the server
const PORT = 3001;
app.listen(PORT, () => console.log(`Messaging backend running on port ${PORT}`));