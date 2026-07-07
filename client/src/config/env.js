/* ==========================================================
   ENVIRONMENT CONFIGURATION
   Centralized application environment variables
========================================================== */

const env = {
  apiBaseUrl:
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",

  appName:
    import.meta.env.VITE_APP_NAME || "Portfolio",

  nodeEnv:
    import.meta.env.MODE,
};

export default env;