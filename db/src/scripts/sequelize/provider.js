// "node src/scripts/sequelize/provider.js" to run
// "node src/scripts/sequelize/provider.js -y" to run without asking the question: want to create the products too?
// "npm run seed-provider" to debug
'use strict'

const setupDB = require('./') // con este vamos a configurar la base de datos
const database = require('../../lib/postgresql')
const inquirer = require('inquirer') // librerias explicadas en el txt "platzi node"
const chalk = require('chalk')
const debug = require('debug')('ERP:db:scripts:providers')
const { config } = require('./config')

// Este objeto nos permite hacerle preguntas al usuario y estas son promesas
const promt = inquirer.createPromptModule()

const providers = [
  {
    Name: 'xx',
    Address: 'calle xx # 0 X 1',
    Phone_number: 123456789
  },
  {
    Name: 'xy',
    Address: 'calle xx # 0 X 1',
    Phone_number: 123456789
  }
]

let dataBaseSelftActivation = false

async function createAllTextProviders () {
  let CreateProducts = false

  process.argv.forEach((value, index) => {
    if (value === '-y' || value === '--yes') {
      dataBaseSelftActivation = true
      console.log(`${chalk.yellow(['Alert: We received that you need to create the products after the providers automatically'])} ${chalk.bgRed([value])}`)
      CreateProducts = true
    }
  })

  if (dataBaseSelftActivation === false) {
    const answer = await promt([
      {
        type: 'confirm',
        name: 'setup',
        message: 'want to create the products too?'
      }
    ])
    if (!answer.setup) { // si decide que no
      console.log('We will create just the providers.')
      CreateProducts = false
    } else {
      console.log('After creating the providers we will create the products too.')
      CreateProducts = true
    }
  }
  const { ProviderModel } = await setupDB(config).catch(handleFatalError) // aqui inicializamos la Base de Datos y tambien creamos las tablas con sus modelos y relaciones provider y products
  if (!ProviderModel) {
    console.log('Proveedor no encontrado: ' + ProviderModel)
  }

  console.log(`${chalk.bold.blue('Creating the providers')}`)
  for (const providerObject of providers) {
    debug(`${chalk.green('Starting the creation of provider:')} ${providerObject.Name}`)
    const resoult = await createTextProvider(providerObject, ProviderModel)
    if (resoult) console.log(JSON.stringify(resoult))
  }
  console.log(`${chalk.bold.green('Ok all done with the creation of the providers')}`)
  if (CreateProducts) {
    const { createAllTextProducts } = require('./products')
    await createAllTextProducts()
  }
  process.exit(0)
}

async function createTextProvider (providerToCreate, ProviderModel) {
  try {
    const condition = {
      where: {
        Name: providerToCreate.Name
      }
    }
    const provider = await database.find(ProviderModel, condition)
    if (!provider) { // si no encuentra al producto, lo crea
      debug(`${chalk.green('the provider doesnt exist!:')} ${providerToCreate.Name}`)
      const newProvider = await database.create(ProviderModel, providerToCreate)
      if (newProvider.Name) {
        console.log(`${chalk.green('New provider created: ')}${newProvider.Name}`)
      }
      return newProvider
    }

    console.log(`${chalk.red('Impossible to create this provider because it already exists: ')}${provider.Name}`)
  } catch(err) {handleFatalError(err)}
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

function handleFatalError (err) {
  console.error(err)
  console.error(err.mesage)
  process.exit(1)
}

createAllTextProviders()
