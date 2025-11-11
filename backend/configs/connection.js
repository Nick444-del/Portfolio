import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || "mongodb+srv://nikhilneelam1869_db_user:hq4MOjyp2tzjzZbO@cluster0.1voyrom.mongodb.net/?appName=Cluster0";

const clientOptions = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  },
};

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, clientOptions);
    
    // Test connection
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log('✅ Successfully connected to MongoDB!');
    
    return mongoose.connection;
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
    throw error;
  }
};

export const disconnectFromDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
    throw error;
  }
};

// Graceful shutdown
export const setupGracefulShutdown = () => {
  process.on('SIGINT', async () => {
    await disconnectFromDatabase();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    await disconnectFromDatabase();
    process.exit(0);
  });
};

// Export mongoose for direct use
export default mongoose;