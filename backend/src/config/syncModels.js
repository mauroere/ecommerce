const { sequelize } = require("./sequelize");
const User = require("../models/User");
const Product = require("../models/Product");
const Store = require("../models/Store");
const Order = require("../models/Order");

const syncModels = async () => {
  try {
    await sequelize.sync({ force: true }); // Use `force: true` to reset the database
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error.message);
  }
};

syncModels();
