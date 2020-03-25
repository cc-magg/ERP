'use strict'

const express = require('express')
//const http = require('http')
const routes = require('./routes')
//const bodyParser = require('body-parser')
const next = require('next')
const asyncify = require('express-asyncify')

// next
const dev = process.env.NODE_ENV !== 'production'
//const { dev } = require('./config')

const nextApp = next(dev)
const nextHandler = nextApp.getRequestHandler()

const chalk = require('chalk')

const { serverPort } = require('./config')
/*const {
    logErrors,
    wrapErrors,
    errorHandler
} = require('./src/utils/middleware/errHandler')*/

nextApp.prepare().then(() => {
    const app = asyncify(express())
    app.use('/', routes)
    app.get('*', (req, res) => nextHandler(req, res))

    app.use((err, req, res, next) => {
        console.log(`${chalk.red('SERVER ERROR:')} ${err}`)

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
    app.listen(serverPort, (err) => {
        if (err) throw err;
        console.log(`${chalk.green('[ERP-web]')} server listening on port ${serverPort}`);
    })
}).catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
})


// settings
/*nextApp.prepare().then(() => {
    const app = asyncify(express())
    //const httpserver = http.createServer(app)
    // Here we are configuring express to use body-parser as middle-ware. (para que las respuestas las mande en json y no en html)
    /*app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.use('/', routes)
    // body parser
    app.use(express.json())

    // Errors middleware
    app.use(logErrors)
    app.use(wrapErrors)
    app.use(errorHandler)

    app.use('/', routes)
    app.get('*', (req, res) => nextHandler(req, res))

    app.use((err, req, res, next) => {
        console.log(`${chalk.red('SERVER ERROR:')} ${err}`)
        if (err.message.match(/not found/)) { // si en algun lugar dice not found
            return res.status(404).send({ error: err.message })
        }
        res.status(500).send({ error: `Api: ${err.message}` })
    })

    process.on('uncaughtException', uncaught_unhandled)
    process.on('unhandledRejection', uncaught_unhandled)
    function uncaught_unhandled(err) { // eslint-disable-line camelcase
        console.error(`${chalk.red('[ERP-api] Fatal error')} ${err.message}`)
        console.error(err.message)
        process.exit(1)
    }
    app.listen(serverPort, (err) => {
        if (err) throw err;
        console.log(`${chalk.green('[ERP-web]')} server listening on port ${port}`);
    })
}).catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
})*/
