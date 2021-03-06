'use strict'

const express = require('express')
const http = require('http')
const routes = require('./routes')
const auth = require('./auth')
const bodyParser = require('body-parser')
const cors = require('cors')

const chalk = require('chalk')
// const debug = require('debug')('API-server')

const { serverPort } = require('./config')

const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./src/utils/middleware/errHandler')
const notFoundHandler = require('./src/utils/middleware/notFoundHandler')

const app = express()


const whitelist = ['http://localhost:8000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      return callback(null, true)
    } else {
      return callback(boom.unauthorized('unauthorized origin'), false)
    }
  }
}
app.use(cors(corsOptions))
// Here we are configuring express to use body-parser as middle-ware. (para que las respuestas las mande en json y no en html)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// settings
/*app.use(function(req, res, next) {
  var origin = req.get('origin');
  console.log('origin= '+origin)
  res.header("Access-Control-Allow-Origin", "http://localhost:8000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

app.use('/api/auth', auth)
app.use('/api', routes)
// body parser
app.use(express.json())

// Catch 404
app.use(notFoundHandler)

// Errors middleware
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

// MANEJO DE ERRORES
/* app.use((err, req, res, next) => {
  console.log(`${chalk.red('SERVER ERROR:')} ${err}`)
  debug(`${chalk.blue('Error:')} ${err.message}`)
  if (err.message.match(/not found/)) { // si en algun lugar dice not found
    return res.status(404).send({ error: err.message })
  }
  res.status(500).send({ error: `Api: ${err.message}` })
}) */

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
