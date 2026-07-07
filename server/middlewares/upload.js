import multer from 'multer';
import { APIError } from './errorHandler.js';

// Setup file streaming disk storage configuration engine settings
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = file.originalname.substring(file.originalname.lastIndexOf('.'));
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  }
});

// Enforce strict file structure filtering policies
const fileFilter = (req, file, cb) => {
  // Allow normal web layouts for common web images or resume documents
  if (
    file.mimetype.startsWith('image/') || 
    file.mimetype === 'application/pdf' ||
    file.mimetype === 'application/msword' ||
    file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) {
    cb(null, true);
  } else {
    cb(new APIError('Invalid asset file format type. Only standard web images or document file formats are permitted.', 400), false);
  }
};

// Instantiate the configured upload engine instance context
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5 Megabyte strict allocation threshold caps
  }
});

export default upload;