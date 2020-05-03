'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupOrderProductsModel (config) {
  const sequelize = setupDatabase(config)// verificamos que este la conexion a la bd y si no lo esta la crea

  // Ahora creamos la tabla 'provider' junto con sus columnas con Sequelize
  return sequelize.define('orderProducts', {
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
  })
}
