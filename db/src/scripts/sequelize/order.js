// "node src/scripts/sequelize/provider.js" to run
// "node src/scripts/sequelize/provider.js -y" to run without asking the question: want to create the products too?
// "npm run seed-provider" to debug
'use strict'

const setupDB = require('./') // con este vamos a configurar la base de datos
const database = require('../../lib/postgresql')
const inquirer = require('inquirer') // librerias explicadas en el txt "platzi node"
const chalk = require('chalk')
const debug = require('debug')('ERP:db:scripts:order')
const { config, orders } = require('./config')

// Este objeto nos permite hacerle preguntas al usuario y estas son promesas
const promt = inquirer.createPromptModule()

async function createAllTestOrders (CreateEverithing) {
  // Verifico que este creado el OfficeProviders con el que vamos a crear la realacion ONE-TO-MANY de todos los proveedores
  const { OrderModel, OfficeProvidersModel } = await setupDB(config).catch(handleFatalError)
  if (!OrderModel || !OfficeProvidersModel) {
    debug(`${chalk.red('Missing OrderModel or OfficeProvidersModel:')} ${OrderModel} - ${OfficeProvidersModel}`)
    handleFatalError(new Error(`Missing OrderModel or OfficeProvidersModel: ${OrderModel} - ${OfficeProvidersModel}`))
  }
  const OfficeProviders = await database.find(OfficeProvidersModel, {})
  if (!OfficeProviders) {
    console.log(`${chalk.red('There are no OfficeProviders, please create it and then proceed to create those providers again, (we need atleast 1 OfficeProviders to create the association).')}`)
    process.exit(0)
  }

  // realizo las verificaciones de "quieres crear tambien los productos?" 
  // unicamente si este archivo no es llamado desde otro lado con un parametro diciendo que lo cree todo sin preguntar.
  let CreateProducts = false
  let dataBaseSelftActivation = Boolean(CreateEverithing) // si CreateEVerithing es diferente de undefined o null(!= null es decir que se envio algun valor a este parametro al llamar a esta funcion) entonces se vuelve true, de lo contrario es false

  process.argv.forEach((value, index) => {
    if (value === '-y' || value === '--yes') {
      dataBaseSelftActivation = true
      console.log(`${chalk.yellow(['Alert: We received that you need to create the products after the orders automatically'])} ${chalk.bgRed([value])}`)
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
      console.log('We will create just the orders.')
    } else {
      console.log('After creating the orders we will create the products too.')
      CreateProducts = true
    }
  }

  // procedo a crear todos los pedidos y agregandole la relacion ONE-TO-MANY con un OfficeProviders
  console.log(`${chalk.bold.blue('Creating the orders')}`)
  for (const orderObject of orders) {
    debug(`${chalk.green('Starting the creation of order:')} ${orderObject.Number}`)
    const orderCreated = await createTestOrder(orderObject, OrderModel, OfficeProviders)
    if (orderCreated) console.log(JSON.stringify(orderCreated))
  }
  console.log(`${chalk.bold.green('Ok all done with the creation of the orders')}`)

  if (CreateEverithing === true || CreateProducts === true) { // cuando corre desde seed-all O cuando corre desde seed-officelocations y selecciona 'yes' en la pregunta
    debug(`${chalk.green('Calling product file cause CreateEverithing was activated')}`)
    const { createAllTestProducts } = require('./product')
    await createAllTestProducts()
  } else { process.exit(0) }
}

async function createTestOrder (orderToCreate, OrderModel, OfficeProviders) {
  try {
    const condition = {
      where: {
        Number: orderToCreate.Number
      }
    }
    let order = await database.find(OrderModel, condition)
    if (!order) { // si no encuentra al pedido, lo crea
      debug(`${chalk.green('the order doesnt exist!:')} ${orderToCreate.Number}`)      

      const newOrder = await database.create(OrderModel, orderToCreate)
      if (newOrder.Number) {
        console.log(`${chalk.green('New order created: ')}${newOrder.Number}`)
        const relation = await OfficeProviders.addOrder(newOrder)
        if (!relation) {
          debug(`${chalk.red('Could not add the order to the relation ONE-TO-MANY with officeProviders')} ${OfficeProviders.id}`)
          handleFatalError(new Error(`Could not add the order to the relation ONE-TO-MANY with officeProviders ${OfficeProviders.id}`))
        }
        console.log(`${chalk.green('order added to relation ONE-TO-MANY with officeProviders number:')} ${OfficeProviders.id}`)
      }
      return await database.find(OrderModel, condition)
    }

    console.log(`${chalk.red('Impossible to create this order because it already exists: ')}${orderToCreate.Number}`)
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
  module.exports = {createAllTestOrders}
} else {
  createAllTestOrders()
}
