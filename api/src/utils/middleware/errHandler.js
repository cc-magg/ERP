'use strict'

const boom = require('@hapi/boom')
const { dev } = require('../../../config')
const chalk = require('chalk')

function withErrorStack (error, stack) { // stack es toda la informacion relacionada al error
  if (dev) { // si estamos en modo desarrollo, mandamos el stack tambien
    return { error, stack }
  }
  return error
}

/**
 * Las funciones que reciben el parametro next son middleware
 * si reciben el parametro err y next, son middleware de manejo de error
 * Con next(err) llamamos al siguiente middleware de manejo de errores
 */
function logErrors (err, req, res, next) {
  console.log(`${chalk.red('[ERP-api-middleware]')} ${err.stack}`)
  next(err)
}

function wrapErrors (err, req, res, next) {
  if (!err.isBoom) { // si el error no es de tipo boom
    next(boom.badImplementation(err)) // lo marcamos como mala implementacion al mismo tiempo que lo ovlvemos de tipo boom
  }
  next(err)
}

function errorHandler (err, req, res, next) {
  console.log('ERROR! '+err)
  if (!err.statusCode) {
    if (err.message.match(/^(unauthorized|Unauthorized)$/)) {
      console.log('error 401')
      return res.status(401).json(withErrorStack(err.message, err.stack))
    } else {
      /*console.log('error 500')
      return res.status(500).json(withErrorStack(err.message, err.stack))*/
      return res.status(err.output.payload.statusCode).json(err.output.payload)
    }
  } else {
    return res.status(err.statusCode).json(err)
  }
  // res.status(err.statusCode ? err.statusCode : 500)
  // res.json(withErrorStack(err.message, err.stack))
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler
}
