'user strict'

const boom = require('@hapi/boom')
const chalk = require('chalk')
const debug = require('debug')('ERP:api:auth:jwtHandler')

function scopesValidationHandler (allowedScopes) { // recibe un array con los scopes que requiere la vista
  return function (req, res, next) {
    if (!req.user || (req.user && !req.user.scopes)) {
      next(boom.unauthorized('Missing scopes or user'))
    }

    const hasAccess = allowedScopes
      .map(allowedScope => req.user.scopes.includes(allowedScope)) // preguntamos si el scope "allowedScope" (uno de los permisos que requiere la vista) existe dentro del array req.scopes (que son los scopes que nos manda el cliente en el request) y si existe, lo retorna en un array
      .filter(allowed => Boolean(allowed)); // filtramos guardando en hasAccess unicamente los resultados en true de map

    if (hasAccess && hasAccess.length == allowedScopes.length) { // verificamos que exista una respuesta y que el tamaño de los scopes existentes sea igual a el tamaño de los scopes que pide la vista
      debug(`${chalk.green('Pass the scopes validation')}`)
      return next()
    } else {
      return boom.unauthorized('Insufficient scopes')
    }
  }
}

module.exports = scopesValidationHandler
