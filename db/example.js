'use strict'

const setupDB = require('./')
const { config, newProduct, newProvider } = require('./config')

async function prueba () {
  let response = null
  const { Product, Provider } = await setupDB(config).catch(handleFatalError)
  if (!Product || !Provider) {
    console.log('Producto o proveedor no encontrados: ' + Product + ' --- ' + Provider)
  }
  try {
    // creo el proveedor
    const { providerServices } = Provider
    // response = await providerServices.createOrUpdateProvider(newProvider)
    //console.log('desde el example index ' + JSON.stringify(response))
    response = await providerServices.findAllProviders()
    console.log('desde el example index2 ' + JSON.stringify(response))

    // creo el producto
    const { productServices } = Product
    // response = await productServices.createOrUpdateProduct(newProduct, 'xx')
    //console.log('desde el example index ' + JSON.stringify(response))
    response = await productServices.findAllProducts()
    console.log('desde el example index2 ' + JSON.stringify(response))
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
