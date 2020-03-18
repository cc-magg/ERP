'use strict'

// Esta libreria nos permite definir el esquema que usaremos en la coleccion de usuarios
const joi = require('@hapi/joi')

/** Definimos un id correspondiente a la coleccion de mongodb.
 * Este id lo estamos creando con una expresion regular:
 * diciendo que el id sera numeros del 0 a 9,
 * letras de a hasta la f minusculas y mayusculas, y que
 * tendra hasta 24 caracteres, Todo este debido a que mongodb
 * maneja los ids de la misma manera que la expresion regular
 * que estamos usando.
 **/
const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/) // este es un objeto tipo joi, a este se le puede hacer validate de una vez

const exampleUserSchema = joi.object({
  name: joi
    .string()
    .max(100)
    .required(),
  password: joi
    .string()
    .required(),
  isAdmin: joi
    .boolean(),
  age: joi
    .number()
    .required(),
  email: joi
    .string()
    .email()
    .required(),
  createdAt: joi
    .number()
    .integer()
    .min(1900)
    .max(2013)
})

module.exports = {
  userIdSchema,
  exampleUserSchema
}
