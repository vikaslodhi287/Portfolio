import app from './app.js';
import connectDB from './config/db.js';
import { verifyMailConnection } from './config/mail.js';
import dotenv from 'dotenv';

// Load Environment Configuration
dotenv.config();

const PORT = process.env.PORT || 5000;

// Execute Network Connectors
const startServer = async () => {
  // Connect to Database
  await connectDB();

  // Test Mail Configurations
  await verifyMailConnection();

  // Start Express Instance
  const server = app.listen(PORT, () => {
    console.log(`Server executing in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });

  // Handle Unhandled Promise Rejections gracefully
  process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection Error: ${err.message}`);
    server.close(() => process.exit(1));
  });
};

startServer();