'use strict'

const boom = require('@hapi/boom') // para mas info de boom: https://www.npmjs.com/package/boom

function validate (data, schema) {
  const { error } = schema.validate(data)
  return error
}

function validationHandler (schema, check = 'body') {
  return function (req, res, next) { // esta es una funcion middleware (la variable re.query llega desde las rutas con metodo get y post es con req.body)
    const error = validate(req[check], schema)
    error ? next(boom.badRequest(error)) : next()
  }
}

module.exports = validationHandler
