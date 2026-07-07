import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const verifyMailConnection = async () => {
  try {
    await transporter.verify();
    console.log('SMTP Mail Server Connected Successfully');
  } catch (error) {
    console.warn(`SMTP Mail Server Connection Warning: ${error.message}`);
  }
};

export default transporter;