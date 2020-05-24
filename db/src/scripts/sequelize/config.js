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
  },
  newOfficelocations: [
    {
      Name: 'Sede1',
      Address: 'direccion sede 1',
      PhoneNumber: 1234567
    },
    {
      Name: 'Sede2',
      Address: 'direccion sede 2',
      PhoneNumber: 2345678
    }
  ],
  providers: [
    {
      Name: 'xx',
      Address: 'calle xx # 0 X 1',
      Phone_number: 123456789
    },
    {
      Name: 'xy',
      Address: 'calle xx # 0 X 1',
      Phone_number: 123456789
    }
  ],
  orders: [ // se les puso con la letro 'o' despues del primer cero para que no tire error por el strict, el valor termina ciendo 1, 2, etc
    {
      Number: 0o001
    },
    {
      Number: 0o002
    },
    {
      Number: 0o003
    }
  ],
  products: [
    {
      Barcode: 123456789,
      Name: 'xxx',
      Description: 'descripcion xxxxx',
      Unit_price: 10,
      Stock: 2,
      New_order_level: 'nose que debe ser esta columna',
      Price_cost: 10,
      Percentage_profit: 0.14
     },
     {
      Barcode: 123456789,
      Name: 'xxy',
      Description: 'descripcion xxxxx',
      Unit_price: 10,
      Stock: 2,
      New_order_level: 'nose que debe ser esta columna',
      Price_cost: 10,
      Percentage_profit: 0.14
     },
     {
      Barcode: 123456789,
      Name: 'xyy',
      Description: 'descripcion xxxxx',
      Unit_price: 10,
      Stock: 2,
      New_order_level: 'nose que debe ser esta columna',
      Price_cost: 10,
      Percentage_profit: 0.14
     },
     {
      Barcode: 123456789,
      Name: 'yyy',
      Description: 'descripcion xxxxx',
      Unit_price: 10,
      Stock: 2,
      New_order_level: 'nose que debe ser esta columna',
      Price_cost: 15,
      Percentage_profit: 0.14
     },
     {
      Barcode: 123456789,
      Name: 'yyx',
      Description: 'descripcion xxxxx',
      Unit_price: 10,
      Stock: 2,
      New_order_level: 'nose que debe ser esta columna',
      Price_cost: 20,
      Percentage_profit: 0.14
     }
  ]
}
