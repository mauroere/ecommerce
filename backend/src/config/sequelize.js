const { Sequelize } = require("sequelize");

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./ecommerce.sqlite", // SQLite database file
  logging: false, // Disable logging
});

const connectSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log("Sequelize connected to SQLite database.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = { sequelize, connectSequelize };
