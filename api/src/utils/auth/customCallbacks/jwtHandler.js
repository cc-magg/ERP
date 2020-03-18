'use strict'

const passport = require('passport')
const boom = require('@hapi/boom')

// JWT Strategy (lo estamos usando para protejer las url)
require('../strategies/jwt')

const protectRoutes = function (req, res, next) {
  passport.authenticate('jwt', function (error, data) { // este es un custom callback, esta mejor explicado en api/auth.js en el post /sign-in
    if (error || !data.user) return next(boom.unauthorized())

    req.login(data.user, { session : false }, (err) => {
      if (err) return next(err)
      return next()
    })
  })(req, res, next)
}

module.exports = protectRoutes
