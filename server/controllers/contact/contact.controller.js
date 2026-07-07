import Contact from '../../models/Contact.js';
import { APIError } from '../../middlewares/errorHandler.js';
import sendEmail from '../../utils/sendEmail.js';

/**
 * Submit a message from the public interface and trigger an SMTP alert notification
 * ROUTE: POST /api/contact
 * ACCESS: Public
 */
export const submitMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Create message entry log document inside the database
    const contactMessage = await Contact.create({
      name,
      email,
      subject,
      message
    });

    // 2. Dispatch automated email notification alert blocks asynchronously
    try {
      await sendEmail({
        email: process.env.ADMIN_EMAIL,
        subject: `Portfolio Contact Form: ${subject}`,
        message: `You received a new message from ${name} (${email}):\n\n${message}`
      });
    } catch (emailError) {
      // Log email delivery failure context but do not interrupt response execution
      console.error('SMTP system failed to dispatch alert notification transmission:', emailError);
    }

    res.status(201).json({
      success: true,
      message: 'Your message has been transmitted successfully. Thank you for connecting!',
      data: contactMessage
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Fetch all submitted messages ordered chronologically (newest first)
 * ROUTE: GET /api/contact
 * ACCESS: Private (Admin Only)
 */
export const getAllMessages = async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update the acknowledgment or operational read status flags on an incoming message
 * ROUTE: PUT /api/contact/:id/read
 * ACCESS: Private (Admin Only)
 */
export const toggleReadStatus = async (req, res, next) => {
  try {
    const contactMessage = await Contact.findById(req.params.id);
    if (!contactMessage) {
      return next(new APIError(`Message record log entry not found with identifier ID [${req.params.id}]`, 404));
    }

    // Toggle boolean parameter states
    contactMessage.isRead = !contactMessage.isRead;
    await contactMessage.save();

    res.status(200).json({
      success: true,
      message: `Message status marked successfully as ${contactMessage.isRead ? 'read' : 'unread'}.`,
      data: contactMessage
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Remove an archival message documentation log item from the database
 * ROUTE: DELETE /api/contact/:id
 * ACCESS: Private (Admin Only)
 */
export const deleteMessage = async (req, res, next) => {
  try {
    const contactMessage = await Contact.findById(req.params.id);
    if (!contactMessage) {
      return next(new APIError(`Message documentation record target not found with reference ID [${req.params.id}]`, 404));
    }

    await contactMessage.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Archival message documentation log dropped successfully from the collection.'
    });
  } catch (error) {
    next(error);
  }
};