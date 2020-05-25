// "node src/scripts/sequelize/provider.js" to run
// "node src/scripts/sequelize/provider.js -y" to run without asking the question: want to create the products too?
// "npm run seed-provider" to debug
'use strict'

const setupDB = require('./') // con este vamos a configurar la base de datos
const database = require('../../lib/postgresql')
const inquirer = require('inquirer') // librerias explicadas en el txt "platzi node"
const chalk = require('chalk')
const debug = require('debug')('ERP:db:scripts:provider')
const { config, providers, newOfficelocations } = require('./config')

// Este objeto nos permite hacerle preguntas al usuario y estas son promesas
const promt = inquirer.createPromptModule()

async function createAllTestProviders (CreateEverithing) {
  // Verifico que este creado el officelocation con el que vamos a crear la realacion MANY-TO-MANY de todos los proveedores
  const { ProviderModel, OfficelocationModel } = await setupDB(config).catch(handleFatalError)
  if (!ProviderModel || !OfficelocationModel) {
    debug(`${chalk.red('Missing ProviderModel or OfficelocationModel:')} ${ProviderModel} - ${OfficelocationModel}`)
    handleFatalError(new Error(`Missing ProviderModel or OfficelocationModel: ${ProviderModel} - ${OfficelocationModel}`))
  }
  const officelocation = await database.find(OfficelocationModel, {
    where: {
      Name: newOfficelocations[0].Name
    }
  })
  if (!officelocation) {
    console.log(`${chalk.red('The officelocation with the Name:')} ${newOfficelocations[0].Name} ${chalk.red('does not exist, please create it and then proceed to create those providers again, (we need atleast 1 officelocation to create the association).')}`)
    process.exit(0)
  }

  // realizo las verificaciones de "quieres crear tambien los pedidos?" 
  // unicamente si este archivo no es llamado desde otro lado con un parametro diciendo que lo cree todo sin preguntar.
  let CreateOrders = false
  let dataBaseSelftActivation = Boolean(CreateEverithing) // si CreateEVerithing es diferente de undefined o null(!= null es decir que se envio algun valor a este parametro al llamar a esta funcion) entonces se vuelve true, de lo contrario es false
  /*if (CreateEverithing) {
    dataBaseSelftActivation = CreateEverithing
  }*/

  process.argv.forEach((value, index) => {
    if (value === '-y' || value === '--yes') {
      dataBaseSelftActivation = true
      console.log(`${chalk.yellow(['Alert: We received that you need to create the orders after the providers automatically'])} ${chalk.bgRed([value])}`)
    }
  })

  if (dataBaseSelftActivation === false) {
    const answer = await promt([
      {
        type: 'confirm',
        name: 'setup',
        message: 'want to create the orders too?'
      }
    ])
    if (!answer.setup) { // si decide que no
      console.log('We will create just the providers.')
    } else {
      console.log('After creating the providers we will create the orders too.')
      CreateOrders = true
    }
  }

  // procedo a crear todos los proveedores y agregandole la relacion MANY-TO-MANY con un Officelocation
  console.log(`${chalk.bold.blue('Creating the providers')}`)
  for (const providerObject of providers) {
    debug(`${chalk.green('Starting the creation of provider:')} ${providerObject.Name}`)
    const providerCreated = await createTestProvider(providerObject, ProviderModel, officelocation)
    if (providerCreated) console.log(JSON.stringify(providerCreated))
    // const respuesta = await officelocation.addProviders(providerCreated, { through: { Number: 12345 } })
  }
  console.log(`${chalk.bold.green('Ok all done with the creation of the providers')}`)

  if (CreateEverithing === true) { // cuando corre desde seed-all
    debug(`${chalk.green('Calling orders file cause CreateEverithing was activated')}`)
    const { createAllTestOrders } = require('./order')
    await createAllTestOrders(true)
  } else if (CreateOrders === true) { // cuando corre desde seed-officelocations y selecciona 'yes' en la pregunta
    debug(`${chalk.green('Calling orders file cause CreateOrders was activated')}`)
    const { createAllTestOrders } = require('./order')
    await createAllTestOrders()
  } else { process.exit(0) }
}

async function createTestProvider (providerToCreate, ProviderModel, officelocation) {
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
        const relation = await officelocation.addProvider(newProvider)
        if (!relation) {
          debug(`${chalk.red('Could not add the provider to the relation MANY-TO-MANY with officelocation')} ${officelocation.Name}`)
          handleFatalError(new Error(`Could not add the provider to the relation MANY-TO-MANY with officelocation ${officelocation.Name}`))
        }
        console.log(`${chalk.green('provider added to relation MANY-TO-MANY with officelocation')} ${officelocation.Name}`)
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

if (module.parent) {
  module.exports = {createAllTestProviders}
} else {
  createAllTestProviders()
}
