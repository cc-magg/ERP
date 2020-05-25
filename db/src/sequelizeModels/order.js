'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupOrderModel (config) {
  const sequelize = setupDatabase(config)// verificamos que este la conexion a la bd y si no lo esta la crea

  // Ahora creamos la tabla 'provider' junto con sus columnas con Sequelize
  return sequelize.define('order', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false
    },
    Number: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  })
}
