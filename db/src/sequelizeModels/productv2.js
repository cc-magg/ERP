'use strict'

const Sequelize = require('sequelize')

module.exports = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Barcode: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  Position: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Unit_price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Stock: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  New_order_level: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Price_cost: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Percentage_profit: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
}
