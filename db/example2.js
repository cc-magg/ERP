'use strict'

const setupDB = require('./')
const chalk = require('chalk')
const { config, newProduct, newProvider } = require('./config')

async function prueba () {
  let response = null
  const { 
    officelocationServices,
    providerServices,
    officeProvidersServices,
    OfficeProvidersModel,
    ProviderModel,
    OfficelocationModel
  } = await setupDB(config).catch(handleFatalError)
  if (!officelocationServices || !providerServices ||!officeProvidersServices) {
    console.log('No encontrados: ' + officelocationServices + ' --- ' + providerServices + ' --- ' + officeProvidersServices)
    handleFatalError(new Error('No encontro algo de index.js que necesitamos'))
  }
  try {
    console.log(`${chalk.blue(['MANY-TO-MANY relations resoult (of supermany-to-many)'])}`)
    // show all officelocation with their Providers, Thx to the many-to-many relation of (super-many-to-many)
    let options = {
      order: [
        ['Name', 'ASC']
      ],
      include: ProviderModel
    }
    response = await officelocationServices.findAllOfficelocations(options)
    console.log(`${chalk.yellow(['show all officelocation with their Providers'])}`)
    console.log('desde el example index1 ' + JSON.stringify(response))

    // show all provider with their Officelocation, Thx to the many-to-many relation of (super-many-to-many)
    options = {
      order: [
        ['Name', 'ASC']
      ],
      include: OfficelocationModel
    }
    response = await providerServices.findAllProviders(options)
    console.log(`${chalk.yellow(['show all provider with their Officelocation'])}`)
    console.log('desde el example index2 ' + JSON.stringify(response))

    //------------------------------------------------------------------------------------------------------------------------
    console.log(`${chalk.blue(['ONE-TO-MANY relations resoult (of supermany-to-many)'])}`)
    // show all officelocation with their officeProviders, Thx to the one-to-many relation of (super-many-to-many)
    options = {
      order: [
        ['Name', 'ASC']
      ],
      include: OfficeProvidersModel
    }
    response = await officelocationServices.findAllOfficelocations(options)
    console.log(`${chalk.yellow(['show all officelocation with their officeProviders'])}`)
    console.log('desde el example index3 ' + JSON.stringify(response))

    // show all provider with their officeProviders, Thx to the one-to-many relation of (super-many-to-many)
    options = {
      order: [
        ['Name', 'ASC']
      ],
      include: OfficeProvidersModel
    }
    response = await providerServices.findAllProviders(options)
    console.log(`${chalk.yellow(['show all provider with their officeProviders'])}`)
    console.log('desde el example index4 ' + JSON.stringify(response))

    // show all officeProviders with their officelocations, Thx to the one-to-many relation of (super-many-to-many)
    options = {
      order: [
        ['id', 'ASC']
      ],
      include: OfficelocationModel
    }
    response = await officeProvidersServices.findAllOfficeProviders(options)
    console.log(`${chalk.yellow(['show all officeProviders with their officelocations'])}`)
    console.log('desde el example index5 ' + JSON.stringify(response))

    // show all officeProviders with their providers, Thx to the one-to-many relation of (super-many-to-many)
    options = {
      order: [
        ['id', 'ASC']
      ],
      include: ProviderModel
    }
    response = await officeProvidersServices.findAllOfficeProviders(options)
    console.log(`${chalk.yellow(['show all officeProviders with their providers'])}`)
    console.log('desde el example index6 ' + JSON.stringify(response))

    // show all officeProviders with their providers and officelocations, Thx to the one-to-many relation of (super-many-to-many)
    options = {
        order: [
          ['id', 'ASC']
        ],
        include: [
          ProviderModel,
          OfficelocationModel
        ]
      }
      response = await officeProvidersServices.findAllOfficeProviders(options)
      console.log(`${chalk.yellow(['show all officeProviders with their providers and officelocations'])}`)
      console.log('desde el example index7 ' + JSON.stringify(response))
    
  } catch (err) {
    handleFatalError(err)
  }

  console.log('Success!')
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
