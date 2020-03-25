// npm run seed-users
'use strict'

/**
 * no usamos los servicios ni nada del codigo (ademas de los modulos y la libreria de mongodb)
 * ya que este script seed es para probar el codigo y tener que evitar crear usuario a usuario para hacer pruebas
 */

const bcrypt = require('bcryptjs')
const chalk = require('chalk')
const debug = require('debug')('app:scripts:users')
const MongoLib = require('../../lib/mongo')
const usercustomSchema = require('../../mongooseModels/customusers')

const users = [
  {
    name: 'Maria',
    password: 'macasu123fuckyouja',
    age: 26,
    email: 'maria@hotmail.com'
  },
  {
    name: 'Maxi',
    password: 'macasu123fuckyouja',
    isAdmin: true,
    age: 26,
    email: 'maxi_994@hotmail.com'
  },
  {
    name: 'Juan',
    password: 'macasu123fuckyouja',
    age: 26,
    email: 'juan@gmail.com'
  },
  {
    name: 'arturo',
    password: '1',
    isAdmin: true,
    age: 25,
    email: 'c@gmail.com'
  }
]

async function createUser (mongoDB, user, db) { // este reemplaza al servicio de services/users.js
  const { name, password, isAdmin, age, email } = user
  const hashedPassword = await bcrypt.hash(password, 10)
  const resultado = await mongoDB.create('customusers', 'customUsers', usercustomSchema, { // esperamos a que la promesa que nos retorno (en la promesa estamos guardando al usuario en la collection) se termine de ejecutar
    name,
    password: hashedPassword,
    isAdmin: Boolean(isAdmin), // verifica, es una condicional como if (isAdmin){} entonces Boolean(isAdmin) = true
    age,
    email
  }, db)
  return resultado._id
}

async function seedUsers () {
  try {
    const mongoDB = MongoLib

    const db = await mongoDB._connect()
    const promises = users.map(async user => { // array.map(funcion callback) maneja una funcion callback (por cada iteraccion) por lo que podemos esperarlo a que termine con Promise.all()
      const userId = await createUser(mongoDB, user, db) // esperamos a que la promesa que ejecuto termine de ejecutar
      debug(chalk.green('User created with id:', userId))
      return userId
    })

    const promesas = await Promise.all(promises) // esperamos a que esten todas las promesas y las imprimimos
    debug(chalk.green('All users created= ' + promesas))
    process.exit(0)
  } catch (error) {
    debug(chalk.red(error))
    process.exit(1)
  }
}

seedUsers()
