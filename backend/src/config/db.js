const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", // Archivo SQLite
  logging: false, // Deshabilitar logs de SQL
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("SQLite connected successfully");
  } catch (error) {
    console.error("SQLite connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
