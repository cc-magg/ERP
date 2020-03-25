'use strict'

const routes = require('express').Router()
const passport = require('passport')
const axios = require("axios")
const boom = require("@hapi/boom")
const { config } = require('./config')

// OAuth Strategy
require('./src/utils/strategies/oauth')

/*routes.get('/', (req, res, next) => {
  // throw new Error(`error custom`)
  return res.send('aqui esta el home! desde el ssr')
})*/

routes.post('/sign-in', async function (req, res, next) {
  const { email, password } = req.body
  try {
    const {  status, data } = await axios({
      method: 'post',
      url: `http://localhost:3000/api/auth/sign-in`,
      data: {
        username: 'hola mundo name',
        email,
        password,
        apiKeyToken: config.apiKeyToken
      },
      auth: {
        username: profile.email,
        password: password
      }
    })

    if (!data || status !== 200) {
      return cb(boom.unauthorized(), false)
    }

    return cb(null, data)
  } catch (err) { // si el request a la api retorna un error...
    console.log(err.message+' '+err.data+' '+err.response)
    return cb(boom.unauthorized(), false)
  }
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
