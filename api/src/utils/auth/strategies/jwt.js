'use strict'

const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const boom = require('@hapi/boom')

const userService = require('../../services/users')
const { defaultConfig } = require('../../../../config')

passport.use(
  new Strategy({
    secretOrKey: defaultConfig.authJwtSecret, // le agregamos el secrec con el que fue creado el jwt
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() // le decimos que el jwt lo saque del header de cada peticion
  },
  async function (tokenPayload, callback) {
    try {
      const user = await userService.getUser({ email: tokenPayload.email })
      if (!user) {
        return callback(boom.unauthorized(), false)
      }

      const newUser = { // removemos la contraseña del usuario antes de seguirlo manipulando
        _id: user._id,
        name: user.name,
        isAdmin: user.isAdmin,
        age: user.age,
        email: user.email,
        scopes: tokenPayload.scopes,
        createdAt: user.createdAt
      }

      callback(null, { user: newUser }) // retornamos null para decir que no hay errores y el usuario con sus permisos
    } catch (err) {
      return callback(err)
    }
  })
)
