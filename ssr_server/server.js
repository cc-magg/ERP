'use strict'

const express = require('express')
const http = require('http')
const routes = require('./routes')
const bodyParser = require('body-parser')

const chalk = require('chalk')

const { serverPort } = require('./config')
const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./src/utils/middleware/errHandler')

const app = express()

// Here we are configuring express to use body-parser as middle-ware. (para que las respuestas las mande en json y no en html)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// settings
app.use(routes)
// body parser
app.use(express.json())

// Errors middleware
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)


function uncaught_unhandled (err) { // eslint-disable-line camelcase
  console.error(`${chalk.red('[ERP-api] Fatal error')} ${err.message}`)
  console.error(err)
  process.exit(1)
}

const server = http.createServer(app)
if (!module.parent) {
  process.on('uncaughtException', uncaught_unhandled)
  process.on('unhandledRejection', uncaught_unhandled)

  server.listen(serverPort, () => {
    console.log(`${chalk.green('[ERP-api]')} server ready and listening on port ${serverPort}, lets do this!`)
  })
}
