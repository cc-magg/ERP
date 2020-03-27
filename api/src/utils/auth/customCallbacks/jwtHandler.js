'use strict'

const passport = require('passport')
const boom = require('@hapi/boom')

// JWT Strategy (lo estamos usando para protejer las url)
require('../strategies/jwt')

const protectRoutes = function (req, res, next) {
  /**
   * @param {*} error es null y solo es un error cuando nosotros retornamos un error desde la estrategia jwt
   * @param {*} data es el usuario que retornamos desde la estrategia jwt 
   * @param {*} info si la validacion del jwt no tira erro entonces es = a "undefined", de lo contrario puede ser "{ JsonWebTokenError: invalid signature }", "{ TokenExpiredError: jwt expired }" y demas errores en la verificacion del jwt
   */
  passport.authenticate('jwt', function (error, data, info) { // este es un custom callback, esta mejor explicado en api/auth.js en el post /sign-in
    console.log('error = '+error+' data = '+JSON.stringify(data)+' info = '+info)
    if (info && typeof info === 'object') return next(boom.unauthorized(info.message)) // si recibimos un error de la validacion del jwt retornamos el mensaje de error
    if (error || !data.user) {
      return next(boom.unauthorized())
    }

    req.login(data.user, { session : false }, (err) => {
      if (err) return next(err)
      return next()
    })
  })(req, res, next)
}

module.exports = protectRoutes
