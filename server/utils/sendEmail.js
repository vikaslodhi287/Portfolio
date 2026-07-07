import nodemailer from 'nodemailer';

/**
 * Global SMTP mail dispatch engine utility 
 * @param {Object} options - Parameter properties block containing target destination email, topic title, and text content string maps
 */
const sendEmail = async (options) => {
  // Create reusable transporter object using the configured SMTP environment parameters
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Define out target transmittal metadata properties layout definitions
  const mailOptions = {
    from: `"Portfolio Dashboard Engine" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.message.replace(/\n/g, '<br>'), // Simple conversion for structural fallback rendering layers
  };

  // Dispatch payload message across open SMTP stream pipelines
  await transporter.sendMail(mailOptions);
};

export default sendEmail;