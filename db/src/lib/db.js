'use strict'

const Sequelize = require('sequelize')
let sequelize = null

module.exports = function setupDatabase (config) {
  /**
   * Esto funciona para cuando no esta instanciada la conexion a la bd, que la instancie y
   * que si se tiene que volver a usar la funcion, esta no repita la creacion de la instancia
   * sino que simplemente retorne la anterior
   */
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}
