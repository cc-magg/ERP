'use strict'

const http = require('http')
const express = require('express')
const asyncify = require('express-asyncify')
const session = require('express-session')
const chalk = require('chalk')

const port = process.env.PORT || 8000

const server = asyncify(express())
const httpserver = http.createServer(server)
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()
const routes = require('./routes')
const bodyParser = require('body-parser')


const {
    logErrors,
    wrapErrors,
    errorHandler
} = require('./utils/middleware/errHandler')


nextApp.prepare().then(() => {
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())
    server.use('/main', (req, res, next) => {
        console.log('PASO POR EL MIDDLEWARE DE MAIN ')
        next()
      })
    server.use(session({
        //esta cookie sera creada con contenido desde el login (jwtoken y sesionID) y sera actualizada (jwtoken) 
        //desde cada vista privada cuando el token ya ha expirado 
        //esta cookie almacena el jwtoken del login y el sesionID lo ponemos como secret y tambien dentro de la cookie
        name: 'sessionName',
        secret: 'keyboard cat', // session ID cookie (es una key para encriptar).
        proxy   : 'true',
        resave: false, // force to re save the cookie
        saveUninitialized: true,
        /*cookie: {
            //secure: false, //only use cookie over https
            maxAge: 8 * 60 * 60 * 1000 //8 hours
        },*/
        httpOnly: true  // dont let browser javascript access cookie ever
    }))

    server.use('/', routes)
    server.all("*", (req, res) => nextHandler(req, res))

    server.use(express.json())

    // Errors middleware
    server.use(logErrors)
    server.use(wrapErrors)
    server.use(errorHandler)

    server.use((err, req, res, next) => {

        if (err.message.match(/not found/)) { // si en algun lugar dice not found
            return res.status(404).send({ error: err.message })
        }

        res.status(500).send({ error: `web: ${err.message}` })
    })
    process.on('uncaughtException', handleFatalError)
    process.on('unhandledRejection', handleFatalError)
    function handleFatalError(err) {
        console.error(`${chalk.red('[fatal error]')} ${err.message}`)
        console.error(err.message)
        process.exit(1)
    }
    httpserver.listen(port, (err) => {
        if (err) throw err;
        console.log(`${chalk.green('[ERP-web]')} server listening on port ${port}`);
    })
}).catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
})

