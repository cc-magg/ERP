'use strict'

const services = require('./src/utils/services/users')

async function prueba () {
  const resultado2 = await services.createUser({
    name: 'maxi',
    password: 'macasu123fuckyouja',
    isAdmin: false,
    age: 26,
    email: 'maxi_994@hotmail.com'
  })
  console.log(resultado2)

  const resultado = await services.getAllUsers()
  console.log(resultado)
  process.exit(0)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)
function handleFatalError (err) {
  console.error(err)
  console.error(err.mesage)
  process.exit(1)
}

prueba()
