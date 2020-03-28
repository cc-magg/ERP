'use strict'

const routes = require('express').Router()
const validationHandler = require('./src/utils/middleware/validationHandler')
const { exampleUserSchema } = require('./src/joiSchemas/users')
const userservices = require('./src/utils/services/users')
const passport = require('passport')
// routes protection
const protectRoutes = require('./src/utils/auth/customCallbacks/jwtHandler')
const scopesValidationHandler = require('./src/utils/middleware/scopesValidationHandler')
// jwt utilities
const { verify } = require('./src/utils/auth/jwtUtilities/jwt')

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

routes.get('/user', protectRoutes, scopesValidationHandler(['signin:auth']), (req, res, next) => {
  if (!req.user) {
    return next(boom.unauthorized()) 
  }

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
process.on('unhandledRejection', handleFatalError)
function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]-api: ')} ${err.message}`)
  console.error(err.message)
  process.exit(1)
} */

module.exports = routes
