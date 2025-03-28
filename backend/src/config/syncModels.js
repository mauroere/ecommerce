const { sequelize } = require("./sequelize");
const User = require("../models/User");

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // Use `alter` to update the schema without data loss
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error.message);
  }
};

syncModels();
