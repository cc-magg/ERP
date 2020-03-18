'use strict'

const boom = require('@hapi/boom')

function notFoundHandler (req, res) { // esta funcion es un middleware pero no recibe el parametro next ya que este minddleware es el ultimo que va a funcionar
  const {
    output: { statusCode, payload }
  } = boom.notFound()

  res.status(statusCode).json(payload)
}

module.exports = notFoundHandler
