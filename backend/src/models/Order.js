const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequelize");

const Order = sequelize.define("Order", {
  totalAmount: { type: DataTypes.FLOAT, allowNull: false },
  paymentStatus: { type: DataTypes.ENUM("Pending", "Completed", "Failed"), defaultValue: "Pending" },
  shippingAddress: { type: DataTypes.JSON, allowNull: false },
  items: { type: DataTypes.JSON, allowNull: false },
  payer: { type: DataTypes.JSON, allowNull: false },
  paymentId: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
}, {
  timestamps: true,
});

module.exports = Order;
