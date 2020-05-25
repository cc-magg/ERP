// "node src/scripts/sequelize/provider.js" to run
// "node src/scripts/sequelize/provider.js -y" to run without asking the question: want to create the products too?
// "npm run seed-provider" to debug
'use strict'

const setupDB = require('./') // con este vamos a configurar la base de datos
const database = require('../../lib/postgresql')
const inquirer = require('inquirer') // librerias explicadas en el txt "platzi node"
const chalk = require('chalk')
const debug = require('debug')('ERP:db:scripts:officelocation')
const { config, newOfficelocations } = require('./config')

// Este objeto nos permite hacerle preguntas al usuario y estas son promesas
const promt = inquirer.createPromptModule()

async function createAllTestOfficelocations () {
  let CreateEverithing = false
  let CreatProviders = false

  process.argv.forEach((value, index) => {
    if (value === '-y' || value === '--yes') {
      CreateEverithing = true
      console.log(`${chalk.yellow(['Alert: We received that you also need to create providers, orders, and products after the officelocation automatically'])} ${chalk.bgRed([value])}`)
    }
  })

  if (CreateEverithing === false) {
    const answer = await promt([
      {
        type: 'confirm',
        name: 'setup',
        message: 'want to create the providers too?'
      }
    ])
    if (!answer.setup) { // si decide que no
      console.log('We will create just the officelocations.')
    } else {
      console.log('After creating the officelocations we will create the providers too.')
      CreatProviders = true
    }
  }
  const { OfficelocationModel } = await setupDB(config).catch(handleFatalError) // aqui inicializamos la Base de Datos y tambien creamos las tablas con sus modelos y relaciones provider y products
  if (!OfficelocationModel) {
    debug(`${chalk.red('Missing OfficelocationModel:')} ${OfficelocationModel}`)
    handleFatalError(new Error(`Missing OfficelocationModel: ${OfficelocationModel}`))
  }

  console.log(`${chalk.bold.blue('Creating the officelocations')}`)
  for (const newOfficelocation of newOfficelocations) {
    debug(`${chalk.green('Starting the creation of officelocation:')} ${newOfficelocation.Name}`)
    const resoult = await createTestOfficelocation(newOfficelocation, OfficelocationModel)
    if (resoult) console.log(JSON.stringify(resoult))
  }
  console.log(`${chalk.bold.green('Ok all done with the creation of the officelocations')}`)
  if (CreateEverithing === true) { // cuando corre desde seed-all
    debug(`${chalk.green('Calling orders file cause CreateEverithing was activated')}`)
    const { createAllTestProviders } = require('./provider')
    await createAllTestProviders(true)
  } else if (CreatProviders === true) { // cuando corre desde seed-officelocations y selecciona 'yes' en la pregunta
    debug(`${chalk.green('Calling orders file cause CreatProviders was activated')}`)
    const { createAllTestProviders } = require('./provider')
    await createAllTestProviders()
  } else { process.exit(0) }
}

async function createTestOfficelocation (officelocationToCreate, OfficelocationModel) {
  try {
    const condition = {
      where: {
        Name: officelocationToCreate.Name
      }
    }

    const officelocation = await database.find(OfficelocationModel, condition)
    if (!officelocation) { // si no encuentra al officelocation, lo crea
      debug(`${chalk.green('the officelocation doesnt exist!:')} ${officelocationToCreate.Name}${chalk.green(', proceeding to creation.')}`)
      const newOfficelocation = await database.create(OfficelocationModel, officelocationToCreate)
      if (newOfficelocation.Name) {
        console.log(`${chalk.green('New Officelocation created: ')}${newOfficelocation.Name}`)
      }
      return newOfficelocation
    }

    console.log(`${chalk.red('Impossible to create this officelocation because it already exists: ')}${officelocation.Name}`)
  } catch(err) {handleFatalError(err)}
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

function handleFatalError (err) {
  console.error(err)
  console.error(err.mesage)
  process.exit(1)
}

createAllTestOfficelocations()
