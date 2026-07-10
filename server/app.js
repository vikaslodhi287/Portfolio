import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { rateLimit } from "express-rate-limit";

// Routes
import authRoutes from "./routes/auth.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import projectRoutes from "./routes/project.routes.js";
import skillRoutes from "./routes/skill.routes.js";
import experienceRoutes from "./routes/experience.routes.js";
import educationRoutes from "./routes/education.routes.js";
import certificateRoutes from "./routes/certificate.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import settingRoutes from "./routes/setting.routes.js";
import navigationRoutes from "./routes/navigation/navigation.routes.js";

// Error Handler
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

/* ==========================================================
   SECURITY
========================================================== */

app.use(helmet());

/* ==========================================================
   CORS
========================================================== */

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Allow Postman, Thunder Client, etc.
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error(`CORS blocked for origin: ${origin}`)
      );
    },

    credentials: true,

    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],

    optionsSuccessStatus: 200,
  })
);

/* ==========================================================
   LOGGER
========================================================== */

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/* ==========================================================
   BODY PARSER
========================================================== */

app.use(express.json({ limit: "10mb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

/* ==========================================================
   RATE LIMITER
   Enable ONLY in Production
========================================================== */

if (process.env.NODE_ENV === "production") {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes

    max: 100,

    standardHeaders: true,

    legacyHeaders: false,

    message: {
      success: false,
      message:
        "Too many requests from this IP, please try again later.",
    },
  });

  app.use("/api", limiter);
}

/* ==========================================================
   HEALTH CHECK
========================================================== */

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "healthy",
    timestamp: new Date(),
  });
});

/* ==========================================================
   API ROUTES
========================================================== */

app.use("/api/auth", authRoutes);

app.use("/api/profile", profileRoutes);

app.use("/api/projects", projectRoutes);

app.use("/api/skills", skillRoutes);

app.use("/api/experience", experienceRoutes);

app.use("/api/education", educationRoutes);

app.use("/api/certificates", certificateRoutes);

app.use("/api/contact", contactRoutes);

app.use("/api/blogs", blogRoutes);

app.use("/api/settings", settingRoutes);

app.use("/api/navigation", navigationRoutes);

/* ==========================================================
   GLOBAL ERROR HANDLER
========================================================== */

app.use(errorHandler);

export default app;