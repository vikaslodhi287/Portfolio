import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';

// Gateway Routing Module Imports
import authRoutes from './routes/auth.routes.js';
import profileRoutes from './routes/profile.routes.js';
import projectRoutes from './routes/project.routes.js';
import skillRoutes from './routes/skill.routes.js';
import experienceRoutes from './routes/experience.routes.js';
import educationRoutes from './routes/education.routes.js';
import certificateRoutes from './routes/certificate.routes.js';
import blogRoutes from './routes/blog.routes.js';
import contactRoutes from './routes/contact.routes.js';
import settingRoutes from './routes/setting.routes.js'; 
import navigationRoutes from './routes/navigation/navigation.routes.js'; // Mounted from subfolder path

// Custom Central Error Interceptor Middleware
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

// 1. Core Platform Security Layers
app.use(helmet());

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? false : 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// 2. Real-Time Request Logging Pipeline
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 3. Payload Request Stream Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 4. Global Anti-Brute Rate Limiter Gatekeeper
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests from this IP, please try again later.' }
});
app.use('/api', limiter);

// 5. System Health Engine Infrastructure Checks
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

// 6. Global API Gateway Endpoints Registration Mappings
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/settings', settingRoutes); 
app.use('/api/navigation', navigationRoutes); // Enabled API Endpoint

// 7. Centralized Global Exception Error Handling Catch Layer
app.use(errorHandler);

export default app;