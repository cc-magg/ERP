'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProductModel (config) {
  const sequelize = setupDatabase(config)// verificamos que este la conexion a la bd y si no lo esta la crea

  // Ahora creamos la tabla 'products' junto con sus columnas con Sequelize
  return sequelize.define('product', {
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
  })
}
