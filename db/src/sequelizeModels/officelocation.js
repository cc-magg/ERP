'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupOfficelocationModel (config) {
  const sequelize = setupDatabase(config)// verificamos que este la conexion a la bd y si no lo esta la crea

  // Ahora creamos la tabla 'provider' junto con sus columnas con Sequelize
  return sequelize.define('officelocation', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    Address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    PhoneNumber: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })
}
