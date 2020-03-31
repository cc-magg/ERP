'use strict'

const debug = require('debug')('ERP:api:config')

// settings MongoDB
const mongodb = {
  user: process.env.PORT || 'example',
  password: process.env.PORT || 'macasu123fuckyouja',
  dbName: process.env.PORT || 'exampleUsers',
  port: process.env.PORT || 27017,
  host: process.env.PORT || 'localhost'
}
// mongo admin root account
const mongodb2 = { // eslint-disable-line
  user: process.env.PORT || 'superuser',
  password: process.env.PORT || 'changeMeToAStrongPassword',
  dbName: process.env.PORT || 'admin',
  port: process.env.PORT || 27017,
  host: process.env.PORT || 'localhost'
}

// settings Server
const serverPort = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production' // si el entorno es diferente a produccion, dev = true
// scripts settings
const defaultConfig = {
  defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
  defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
  authJwtSecret: process.env.AUTH_JWT_SECRET || 'ZDQBalu14iOC3o7wRbAyMLHS2J9mFxWg',
  publicApiKeyYoken: process.env.PUBLIC_API_KEY_YOKEN,
  adminApiKeyYoken: process.env.ADMIN_API_KEY_YOKEN
}

// postgresql sequelize configuration
const configDb = {
  database: process.env.DB_NAME || 'ERP',
  username: process.env.USER || 'ERPAdmin',
  password: process.env.PASSWORD || 'ERPPassword',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres', // este puede cambiar a oracle o mysql y asi
  logging: session => debug(session), // Esto es para imprimir en consola con console.log cuando haga loggin alguien, es parte de la libreria debug
  operatorsAliases: 0 // Este codigo es para mejorar la seguridad de sequelize
}

module.exports = {
  mongodb,
  serverPort,
  dev,
  defaultConfig,
  configDb
}
