'use strict'

const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom')
const bcryp = require('bcryptjs')

const userService = require('../../services/users')

passport.use(new BasicStrategy(async function (email, password, callback) {
  console.log('desde middleware '+email)
  try {
    const user = await userService.getUser(email)

    if (!user) {
      return callback(boom.unauthorized('unauthorized3'), false)
    }

    if (!(await bcryp.compare(password, user.password))) {
      return callback(boom.unauthorized('unauthorized4'), false)
    }

    //delete user.password // eliminamos la key password del objeto usuario para que el lado render no lo pueda ver y asi tener mas seguridad.

    console.log('desde midleware basic = '+user)
    return callback(null, user) // retornamos null para decir que no hay errores y el usuario
  } catch (err) {
    return callback(err)
  }
}))
