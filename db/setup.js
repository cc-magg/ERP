// "node setup" to run
// "node setup -y" to run without asking the question: are you sure of deleting the data of all the database?
'use strict'

const db = require('./') // requerimos de index.js
const inquirer = require('inquirer') // librerias explicadas en el txt "platzi node"
const chalk = require('chalk')
const { config } = require('./config')

// Este objeto nos permite hacerle preguntas al usuario y estas son promesas
const promt = inquirer.createPromptModule()

let dataBaseSelftActivation = false

async function setup () {
  process.argv.forEach((value, index) => {
    if (value === '-y' || value === '--yes') {
      dataBaseSelftActivation = true
      console.log(`${chalk.yellow(['Alert: We received that you need to initialize the database automatically with the argument'])} ${chalk.bgRed([value])}`)
    }
  })
  if (dataBaseSelftActivation === false) {
    const answer = await promt([
      {
        type: 'confirm',
        name: 'setup',
        message: 'This will destroy your database, are you sure?'
      }
    ])
    if (!answer.setup) {
      return console.log('Nothing happened :)')
    }
  }

  config.setup = true // agregamos setup para que en index.js se borre la tabla y se vuelva a crear
  console.log(JSON.stringify(config))

  await db(config).catch(handleFatalError)

  console.log(`${chalk.bold.green('Success! database initializated with all tables empties')}`)
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.bgRed('[ERP-db] Fatal error')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
