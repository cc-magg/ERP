'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProviderModel (config) {
  const sequelize = setupDatabase(config)// verificamos que este la conexion a la bd y si no lo esta la crea

  // Ahora creamos la tabla 'provider' junto con sus columnas con Sequelize
  return sequelize.define('provider', {
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    Address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Phone_number: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })
}
