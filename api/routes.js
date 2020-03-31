'use strict'

const routes = require('express').Router()
const validationHandler = require('./src/utils/middleware/validationHandler')
const { exampleUserSchema } = require('./src/joiSchemas/users')
const userservices = require('./src/utils/services/users')
const chalk = require('chalk')
const debug = require('debug')('ERP:api:routes')
const { configDb } = require('./config')

// routes protection
const protectRoutes = require('./src/utils/auth/customCallbacks/jwtHandler')
const scopesValidationHandler = require('./src/utils/middleware/scopesValidationHandler')

//sequelize db configuration
const setupSequelizeDB = require('ERP-db')
let services, productServices // Services of db postgresql sequelize

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

routes.post('/getallproducts', protectRoutes, scopesValidationHandler(['signin:auth']), async (req, res, next) => {
  if (!services) {
    try {
      debug(`${chalk.green('Starting the request to db for the initilization of sequelize')}`)
      services = await setupSequelizeDB(configDb).catch(handleFatalError)
      productServices = services.Product.productServices
    } catch (err) {
      return next(err)
    }
  }

  const { orderedBy } = req.body
  try {
    if (!orderedBy) { // si no lo quiere ordenado
      debug(`${chalk.green('Starting the request to db of products')}`)
      const resoult = await productServices.findAllProducts() // si retorna un error va a caer en el catch
      return res.status(200).json({
        data: resoult,
        message: 'products list'
      })
    }

    debug(`${chalk.green('Starting the request to db of products ordered by: ')} ${orderedBy}`)
    const arrayOrderedBy = []
    arrayOrderedBy.push(orderedBy.split(',')) // arrayOrderedBy = [["Name","DESC"]]
    console.log(arrayOrderedBy)
    const resoult = await productServices.findAllProducts(arrayOrderedBy) // si retorna un error va a caer en el catch
    return res.status(200).json({
      data: resoult,
      message: 'products list'
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
