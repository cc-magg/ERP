'use strict'

const debug = require('debug')('ERP:db:config') // El segundo nombre es llamado un save space que indica donde esta haciendo debug

module.exports = {
  config: {
    database: process.env.DB_NAME || 'ERP',
    username: process.env.USER || 'ERPAdmin',
    password: process.env.PASSWORD || 'ERPPassword',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres', // este puede cambiar a oracle o mysql y asi
    logging: session => debug(session), // Esto es para imprimir en consola con console.log cuando haga loggin alguien, es parte de la libreria debug
    operatorsAliases: 0 // Este codigo es para mejorar la seguridad de sequelize
  },
  newProduct: {
    Barcode: 123456789,
    Name: 'xx',
    Description: 'descripcion xxxxx',
    Unit_price: 10,
    Stock: 2,
    New_order_level: 'nose que debe ser esta columna',
    Provider: 'cooppidrogas',
    Branch_office: 'YY'
  },
  newProvider: {
    Name: 'xx',
    Address: 'calle xx # 0 X 1',
    Phone_number: 123456789
  }
}
