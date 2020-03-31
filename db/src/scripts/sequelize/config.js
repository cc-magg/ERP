'use strict'

const debug = require('debug')('ERP:db:scripts:config') // El segundo nombre es llamado un save space que indica donde esta haciendo debug

module.exports = {
  config: {
    database: process.env.DB_NAME || 'ERP',
    username: process.env.USER || 'ERPAdmin',
    password: process.env.PASSWORD || 'ERPPassword',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres', // este puede cambiar a oracle o mysql y asi
    logging: session => debug(session), // Esto es para imprimir en consola con console.log cuando haga loggin alguien, es parte de la libreria debug
    operatorsAliases: 0 // Este codigo es para mejorar la seguridad de sequelize
  }
}
