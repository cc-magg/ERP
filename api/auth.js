'use strict'

const routes = require('express').Router()
const passport = require('passport')
const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const { defaultConfig } = require('./config')
const apiKeyServices = require('./src/utils/services/apiKey')
const userServices = require('./src/utils/services/users')
const validationHandler = require('./src/utils/middleware/validationHandler')
const { exampleUserSchema } = require('./src/joiSchemas/users')

// Basic strategy
require('./src/utils/auth/strategies/basic')

routes.post('/sign-in', async (req, res, next) => {
  const { apiKeyToken } = req.body
  console.log('apikeytoken= '+apiKeyToken)
  if (!apiKeyToken) {
    return next(boom.unauthorized('apiKeyToken is required'))
  }

  /**
   * NOTA 1:
   * A la siguiente autenticacion le pusimos un "custom callback" de segundo parametro,
   * eso para continuar con el callback que tenemos en
   * la direccion "./src/utils/auth/strategies/basic.js" (que lo tenemos como middleware de passport y lo estamos requiriendo mas arriba).
   * pusimos (req, res, next) al final del passport.authenticate
   * debido a que se le debe de poner a todo custom callback de passport
   * ya que este "passport.authenticate" nos retorna una funcion a la que volvemos a llamar con argumentos:
   * <funcion>(req, res, next), esto hace que ignore el callback del 'basic' que mencionamos arriba
   *
   * NOTA 2:
   * El callback que mensionamos (el que estamos requiriendo) devuelve dos parametros: error y user
   * ahora en este custom callback debemos recibir esos dos parametros que estamos mandando desde el anterior callback,
   * por eso ahora estamos recibiendo como parametros (error, user).
   * @param {*} error es el error que devolvemos desde "./src/utils/auth/strategies/basic.js"
   * @param {*} user es el usuario que devolvemos desde "./src/utils/auth/strategies/basic.js" SI y solo SI la contraseña
   * que ingresa es la misma a la que tenemos en la DB.
   *
   * NOTA 3:
   * Al usar la estrategia 'basic' le estamos mandando a la direccion "./src/utils/auth/strategies/basic.js"
   * el usuario y la contraseña que se recibio en el post como AUTH
   */
  passport.authenticate('basic', function (error, user) {
    try {
      console.log('aaaa'+error+' '+user+JSON.stringify(user))
      if (error || !user) { // si nos devuelve un error o si el usuario no es encontrado
        return next(boom.unauthorized('unauthorized1'))
      }

      req.login(user, { session: false }, async function (error) {
        if (error) {
          return next(error)
        }
        /**
         * con el apikey que recibimos en el post procedemos a buscarlo en la DB y si existe,
         * proceder a responder con un token que incluya los permisos correspondientes a su nivel de apikey
         */
        const apiKey = await apiKeyServices.getApiKey(apiKeyToken)
        if (!apiKey) {
          return next(boom.unauthorized('unauthorized2'))
        }

        const { _id, name, email } = user

        const payload = {
          sub: _id,
          name,
          email,
          scopes: apiKey.scopes
        }
        const token = jwt.sign(payload, defaultConfig.authJwtSecret, {
          expiresIn: '15m'
        })

        return res.status(200).json({ token, user: { _id, name, email } })
      })
    } catch (err) {
      return next(err)
    }
  })(req, res, next)
})

routes.post('/sign-up', validationHandler(exampleUserSchema), async (req, res, next) => { // validationHandler, 2 parametro es diciendole que la informacion esta en req.query
  const user = req.body

  try {
    const alreadyExist = await userServices.getUser(user.email)
    if (alreadyExist) {
      return res.status(200).json({
        data: alreadyExist.email,
        message: 'user already exist'
      })
    }
    const data = await userServices.createUser(user)

    res.status(200).json({
      data,
      message: 'user created'
    })
  } catch (err) {
    return next(err)
  }
})

module.exports = routes
