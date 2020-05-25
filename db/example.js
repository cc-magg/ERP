'use strict'

const setupDB = require('./')
const { config, newProduct, newProvider } = require('./config')

async function prueba () {
  let response = null
  const { Product, Provider, Order } = await setupDB(config).catch(handleFatalError)
  if (!Product || !Provider ||!Order) {
    console.log('Producto o proveedor no encontrados: ' + Product + ' --- ' + Provider)
  }
  try {
    // creo el proveedor
    const { providerServices } = Provider
    // response = await providerServices.createOrUpdateProvider(newProvider)
    //console.log('desde el example index ' + JSON.stringify(response))
    response = await providerServices.findAllProviders()
    console.log('desde el example index1 ' + JSON.stringify(response))

    // MANY-TO-MANY productos-con-proveedores
    const { productServices } = Product
    // response = await productServices.createOrUpdateProduct(newProduct, 'xx')
    //console.log('desde el example index ' + JSON.stringify(response))
    let options = {
      order: [
        ['Name', 'ASC']
      ],
      include: Product.ProviderModell
    }
    response = await productServices.findAllProducts(options)
    console.log('MANY-TO-MANY productos-con-proveedores')
    console.log('desde el example index21 ' + JSON.stringify(response))
    console.log('desde el example index22 ' + JSON.stringify(response[0].providers[0].orders.Number))
    

    // MANY-TO-MANY proveedores-con-productos
    options = {
      order: [
        ['Name', 'ASC']
      ],
      include: Provider.ProductsModell
    }
    console.log('aaa')
    response = await providerServices.findAllProviders(options)
    console.log('MANY-TO-MANY proveedores-con-productos')
    console.log('desde el example index21--1 ' + JSON.stringify(response))
    console.log('desde el example index22--1 ' + JSON.stringify(response[0].products[0].orders.Number))

    //ONE-TO-MANY proveedores-con-orders
    options = {
      order: [
        ['Name', 'ASC']
      ],
      include: Provider.ordersModel
    }
    console.log('aaa')
    response = await providerServices.findAllProviders(options)
    console.log('ONE-TO-MANY proveedores-con-orders')
    console.log('desde el example index21--1 ' + JSON.stringify(response))
    console.log('desde el example index22--1 ' + JSON.stringify(response[0].orders[0].Number))

    //ONE-TO-MANY productos-con-orders
    options = {
      order: [
        ['Name', 'ASC']
      ],
      include: Provider.ordersModel
    }
    console.log('aaa')
    response = await productServices.findAllProducts(options)
    console.log('ONE-TO-MANY productos-con-orders')
    console.log('desde el example index21--1 ' + JSON.stringify(response))
    console.log('desde el example index22--1 ' + JSON.stringify(response[0].orders[0].Number))

    //ONE-TO-MANY orders-con-productos
    options = {
      order: [
        ['Name', 'ASC']
      ],
      include: Provider.ordersModel
    }
    console.log('aaa')
    response = await productServices.findAllProducts(options)
    console.log('ONE-TO-MANY productos-con-orders')
    console.log('desde el example index21--1 ' + JSON.stringify(response))
    console.log('desde el example index22--1 ' + JSON.stringify(response[0].orders[0].Number))
    
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
