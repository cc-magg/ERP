'use strict'

const routes = require('express').Router()
const passport = require('passport')
const boom = require('@hapi/boom')

// OAuth Strategy
require('./src/utils/strategies/oauth')

routes.get('/', (req, res, next) => {
  // throw new Error(`error custom`)
  return res.send('aqui esta el home! desde el ssr')
})

routes.post('/sign-in', function (req, res, next) {
  console.log('parametros en sign-in '+JSON.stringify(req.body))
  const resultado = {
    token: 'aaaa',
    user: {
      nombre: 'arturo'
    }
  }
  return res.status(200).json(resultado)
})

routes.get('/auth/google-oauth', passport.authenticate('google-oauth', {
  scope: [ 'email', 'profile', 'openid' ]
}))

routes.get('/auth/google-oauth/callback', passport.authenticate('google-oauth', { session: false }), (req, res, next) => {
  // throw new Error(`error custom`)
  //if (!req.query.user) next(boom.unauthorized())
  console.log('AA'+JSON.stringify(req.user))
  const { token, user } = req
  return res.status(200).json(user)
})

module.exports = routes
