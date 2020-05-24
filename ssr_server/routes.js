'use strict'

const routes = require('express').Router()
const passport = require('passport')
const axios = require("axios")
const boom = require("@hapi/boom")
const { config } = require('./config')
const { apiKeyToken } = require('./keysConfig')

// OAuth Strategy
require('./utils/strategies/oauth')

/*routes.use('/main', (req, res, next) => {
  req.session.count = req.session.count? req.session.count+1 : 1
  console.log('CONTEO DE COOKIE '+req.session.count)
  // throw new Error(`error custom`)
  next()
})*/

/**
 * on each private view we have to call a middleware like in .use('/main', middlewareHere, (req, res, next))
 */

//on login call the api to check the user username and password
routes.post('/validateUser', async function (req, res, next) {
  const { token } = req.body
  //console.log('ENTRO ' + token + ' APIKEYTOKEN ' + apiKeyToken)
  try {
    const response = await axios({
      method: 'post',
      url: `http://localhost:3000/api/auth/sign-in`,
      data: {
        apiKeyToken
      },
      headers: {
        'Authorization': `Basic ${token}`
      }
    })
    //saves the new jwtoken and sessionId in the cookie
    //console.log('USER LOGUED IN NOW THE JWTOKEN IS: ' + response.data.token)
    req.session.jwtoken = response.data.token
    req.session.sessionId = response.data.sessionId
    return res.send(response.data)
  } catch (err) { // si el request a la api retorna un error...
    //console.log('respuestaaaaa!!!! '+err.message + ' ' + err.data + ' ' + err.response)
    return res.send(err)
  }
})

const checkUserForLogIn = async (req, res, next) => {
  //it's almost the same as the middlware userAlreadyAuth but we call this one first from login so that if there is
  //no token then insted of redirecting to login (generating an infinite loop) it just send an answer
  //console.log('--------> SI ENTRO 1 ', req.session.jwtoken)
  if (!req.session.jwtoken || req.session.jwtoken == undefined) {
    //user is not logued because there is not jwtoken in the cookie
    next()
  } else {
    userAlreadyAuth(req, res, next)
    next()
  }
}

//este middleware es para validar desde el server si:  existe una cookie? (esta el usuario loguead?)
//if there is a jwtoken in the cookie then the user is logued
const userAlreadyAuth = async (req, res, next) => {
  //console.log('--------> SI ENTRO 2 ', req.session.jwtoken)
  //console.log('JWTOKEN ' + req.session.jwtoken)
  if (!req.session.jwtoken || req.session.jwtoken == undefined) {
    //user is not logued because there is not jwtoken in the cookie
    //console.log('VA PARA LOGIN')
    res.redirect('/login')
  } else {
    //there is a jwtoken so it's validated to check if it's still valid or if it has expired
    //console.log('MIDDLEWARE ANTES DE VALIDAR EL JWTOKEN')
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/api/user',
        headers: { 'Authorization': `Bearer ${req.session.jwtoken}` }
      })
      //console.log('LA RESPUESTA ES: ' + response.data.data.name)
    } catch (error) {
      //the token validation response is error that means the token has expired so here me have to get a new token
      //console.log('Request failed¡¡ error: ' + error)
      try {
        const response = await axios({
          method: 'post',
          url: 'http://localhost:3000/api/getnewtoken',
          data: {
            apiKeyToken,
            sessionId: req.session.sessionId
          }
        })
        //console.log('GET NEW TOKEN RETORNO: ' + response.data.token)
        req.session.jwtoken = response.data.token
      } catch (error) {
        //there was an error trying to get the new jsonWebToken so delete the jwt and go to login
        //console.log('Request failed¡¡ error: ' + error)
        req.session.destroy(err => {
          if (err) {
            console.log('cookie content could not be destroyed', err)
          } else console.log('cookie content deleted')
        })
        res.redirect('/login')
      }
    }
    next()
  }
}

//on /main load adds a middleware to validate the user as it's a private view
routes.use('/main', userAlreadyAuth, (req, res, next) => {
  //console.log('PASO POR EL MIDDLEWARE DE MAIN ')
  next()
})

//called to validate the user before redirecting it to a private view from the client
routes.get('/checkToken', checkUserForLogIn, async (req, res, next) => {
  //esta unicamente va a retornar si ya esta logueado o no
  //console.log('CHECKTOKEN SALIO DEL MIDDLEWARE', req.session.jwtoken)
  if (!req.session.jwtoken || req.session.jwtoken == undefined) {
    res.send('notLogued')
  } else res.send('logued')
})

routes.use('/login', checkUserForLogIn, async (req, res, next) => {
  //esta va a redireccionar a /main una vez sepa que esta logueado
  req.session.count = req.session.count ? req.session.count + 1 : 1
  //console.log('CHECKTOKEN SALIO DEL MIDDLEWARE', req.session.count)
  //console.log('EL JWT ES ' + req.session.jwtoken)
  if (req.session.jwtoken) {
    res.redirect('/main')
  } else next()
})

//called to validate the user and then (if there is a user) log it out
routes.get('/logout', userAlreadyAuth, (req, res, next) => {
  //console.log('LOGOUT SALIO DEL MIDDLEWARE')
  req.session.destroy(err => {
    if (err) {
      //console.log('cookie content could not be destroyed', err)
      res.send(err)
    } else {
      //console.log('cookie content deleted')
      res.send('deleted')
    }
  })
})

routes.get('/auth/google-oauth', passport.authenticate('google-oauth', {
  scope: ['email', 'profile', 'openid']
}))

routes.get('/auth/google-oauth/callback', passport.authenticate('google-oauth', { session: false }), (req, res, next) => {
  // throw new Error(`error custom`)
  //if (!req.query.user) next(boom.unauthorized())
  //console.log('AA' + JSON.stringify(req.user))
  const { token, user } = req
  return res.status(200).json(user)
})

module.exports = routes
