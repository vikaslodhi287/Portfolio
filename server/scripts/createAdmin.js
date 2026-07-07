import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from '../models/Admin.js'; 

dotenv.config();

const createSecureAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio');
    console.log('Database connected successfully.');

    // Clean out old matching entries to keep validation pristine
    await Admin.deleteMany({ email: 'developer@portfolio.com' });

    const targetAdmin = new Admin({
      username: 'admin', // Added the missing field required by your model validation rule
      email: 'developer@portfolio.com',
      password: 'SecurePassword123!', 
      fullName: 'Vikas Lodhi'
    });

    await targetAdmin.save();
    console.log('==================================================');
    console.log('ADMIN ACCOUNT CREATED SUCCESSFULLY!');
    console.log('Username: admin');
    console.log('Email: developer@portfolio.com');
    console.log('Password: SecurePassword123!');
    console.log('==================================================');

    process.exit(0);
  } catch (error) {
    console.error('Failed to inject admin user:', error);
    process.exit(1);
  }
};

createSecureAdmin();