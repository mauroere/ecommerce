const requiredEnvVars = ["PORT", "JWT_SECRET", "FRONTEND_URL"];

const validateEnv = () => {
  const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);
  if (missingVars.length > 0) {
    console.error(`Missing required environment variables: ${missingVars.join(", ")}`);
    process.exit(1);
  }
};

module.exports = validateEnv;
