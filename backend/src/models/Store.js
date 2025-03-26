const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Store = sequelize.define(
  "Store",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner: {
      type: DataTypes.INTEGER, // Relación con el ID del usuario
      allowNull: false,
    },
    domain: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    appearanceConfig: {
      type: DataTypes.JSON,
      defaultValue: {}, // Configuración de apariencia
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Store;