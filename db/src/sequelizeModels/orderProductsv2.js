'use strict'

const Sequelize = require('sequelize')

module.exports = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Product_stock: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Product_profit: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
}
