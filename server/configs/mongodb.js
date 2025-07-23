import mongoose from "mongoose";

// Connect to MongoDB database with proper error handling
const connectDB = async () => {
  try {
    // Remove the /Edemy part if your connection string already has a database
    const connectionString = process.env.MONGODB_URI;
    
    // Set up event listeners for connection states
    mongoose.connection.on('connected', () => 
      console.log('Database connected successfully!')
    );
    
    mongoose.connection.on('error', (err) => 
      console.error('MongoDB connection error:', err)
    );
    
    mongoose.connection.on('disconnected', () => 
      console.log('MongoDB disconnected')
    );
    
    // Connect with options for better reliability
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    return true;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    return false;
  }
}

export default connectDB;