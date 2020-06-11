'use strict'

const routes = require('express').Router()
const validationHandler = require('./src/utils/middleware/validationHandler')
const { exampleUserSchema } = require('./src/joiSchemas/users')
const userservices = require('./src/utils/services/users')
const chalk = require('chalk')
const Boom = require('@hapi/boom')
const debug = require('debug')('ERP:api:routes')
const { configDb } = require('./config')
const dateFormat = require('dateformat')

// routes protection
const protectRoutes = require('./src/utils/auth/customCallbacks/jwtHandler')
const scopesValidationHandler = require('./src/utils/middleware/scopesValidationHandler')

//sequelize db configuration
const setupSequelizeDB = require('ERP-db')
let services, providerServices // Services of db postgresql sequelize

routes.get('/', (req, res, next) => {
  // throw new Error(`error custom`)
  return res.send('aqui esta el home!')
})

routes.get('/vistaprivada', protectRoutes, scopesValidationHandler(['signin:auth']), (req, res, next) => {
  // throw new Error(`error custom`)
  return res.status(200).json({
    data: 'ok',
    message: 'ok'
  })
})

routes.post('/user', protectRoutes, scopesValidationHandler(['signin:auth']), (req, res, next) => {
  if (!req.user) return next(boom.unauthorized()) 

  const { name, email } = req.user
  const user = {
    name,
    email
  }
  return res.status(200).json({
    data: user,
    message: 'user information'
  })
})

routes.post('/createproductsbackup', protectRoutes, scopesValidationHandler(['signin:auth']), async (req, res, next) => {
  const { office } = req.body
  if (!office) {
    debug(`${chalk.red('Error: Missing a office in the req.body')}`)
    return next(Boom.badRequest('Missing a office in the req.body'))
  }

  let productServices = null
  try {
    debug(`${chalk.green('Starting the request to db for the initilization of sequelize')}`)
    const table_name = office+'ProductsServices'
    services = await setupSequelizeDB(configDb).catch(handleFatalError)
    console.log(JSON.stringify(services)+' '+typeof services)
    productServices = services[table_name] // es como decir: productServices = services.Sede1ProductsServices
    if (!services[table_name]) {
      debug(`${chalk.red('Error: This table doesnt exist or atleast the services')} ${table_name} ${chalk.red('doesnt exist.')}`)
      return next(Boom.badRequest('The office '+office+' doesnt exist.'))
    }
  } catch (err) {
    return next(err)
  }

  try {
    debug(`${chalk.green('Starting the request to db of products')}`)
    const backupDate = dateFormat(new Date(), "yyyy_mm_dd_HH_MM_ss_l")
    const newBackupModel = await productServices.createProductsBackup(office+'Products', backupDate) // si retorna un error va a caer en el catch
    if (!newBackupModel) {
      debug(`${chalk.red('Error: there was a problem when trying to create the backup of the products table of the office')} ${office}`)
      return next(Boom.badImplementation('there was a problem when trying to create the backup of the products table'))
    }

    await productServices.tableReset(office+'Products')

    return res.status(200).json({
      data: {},
      message: `Products backup created and ${office+'Products'} reseted`
    })

  } catch (err) {
    return next(err)
  }
})

routes.post('/getallproductsbyoffice', protectRoutes, scopesValidationHandler(['signin:auth']), async (req, res, next) => {
  const { office, orderedBy, provider, productPosition } = req.body // orderedBy = "<column>,<ASC||DESC>"
  if (!office) { // si no lo quiere ordenado
    debug(`${chalk.red('Error: Missing a office in the req.body')}`)
    return next(Boom.badRequest('Missing a office in the req.body'))
  }

  let productServices = null
  try {
    debug(`${chalk.green('Starting the request to db for the initilization of sequelize')}`)
    const table_name = office+'ProductsServices'
    services = await setupSequelizeDB(configDb).catch(handleFatalError)
    // console.log(JSON.stringify(services)+' '+typeof services)
    if (!services[table_name]) {
      debug(`${chalk.red('Error: This table doesnt exist or atleast the services')} ${table_name} ${chalk.red('doesnt exist.')}`)
      return next(Boom.badRequest('The office '+office+' doesnt exist.'))
    }
    productServices = services[table_name] // es como decir: productServices = services.Sede1ProductsServices
  } catch (err) {
    return next(err)
  }
  

  const requestFilterOptions = {
    orderedBy,
    provider,
    productPosition
  }

  try {
    const resoult = await productServices.findAllProducts(requestFilterOptions) // si retorna un error va a caer en el catch
    return res.status(200).json({
      data: resoult,
      message: 'products list'
    })
  } catch (err) {
    return next(err)
  }
})

routes.post('/getallproviders', protectRoutes, scopesValidationHandler(['signin:auth']), async (req, res, next) => {
  if (!services) {
    try {
      debug(`${chalk.green('Starting the request to db for the initilization of sequelize')}`)
      services = await setupSequelizeDB(configDb).catch(handleFatalError)
      providerServices = services.providerServices
    } catch (err) {
      return next(err)
    }
  }

  const { orderedBy } = req.body // = "<column>,<ASC||DESC>"
  try {
    if (!orderedBy) { // si no lo quiere ordenado
      debug(`${chalk.green('Starting the request to db of providers')}`)
      const resoult = await providerServices.findAllProviders() // si retorna un error va a caer en el catch
      return res.status(200).json({
        data: resoult,
        message: 'products list'
      })
    }

    debug(`${chalk.green('Starting the request to db of providers ordered by: ')} ${orderedBy}`)

    const resoult = await providerServices.findAllProviders(orderedBy) // si retorna un error va a caer en el catch
    return res.status(200).json({
      data: resoult,
      message: 'providers list'
    })
  } catch (err) {
    return next(err)
  }
})

routes.get('/getallusers', async (req, res, next) => {
  try {
    const data = await userservices.getAllUsers(req.query)

    res.status(200).json({
      data,
      message: 'all users.'
    })
  } catch (error) {
    next(error)
  }
})

routes.get('/createuser', validationHandler(exampleUserSchema, 'query'), async (req, res, next) => { // validationHandler, 2 parametro es diciendole que la informacion esta en req.query
  try {
    const data = await userservices.createUser(req.query)

    res.status(200).json({
      data,
      message: 'user created'
    })
  } catch (error) {
    next(error)
  }
})

routes.delete('/deleteallusers', validationHandler(exampleUserSchema, 'query'), async (req, res, next) => { // validationHandler, 2 parametro es diciendole que la informacion esta en req.query

})

/* process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError) */
function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]-api-routes: ')} ${err.message}`)
  console.error(err.message)
  process.exit(1)
}

module.exports = routes
