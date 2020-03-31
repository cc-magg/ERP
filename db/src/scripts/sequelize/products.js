// "node src/scripts/sequelize/products.js" to run
// "npm run seed-products" to debug
'use strict'

const setupDB = require('./') // con este vamos a configurar la base de datos
const database = require('../../lib/postgresql')
const chalk = require('chalk')
const debug = require('debug')('ERP:db:scripts:products')
const { config } = require('./config')

const providerName = 'xx'

const products = [
  {
    Barcode: 123456789,
    Name: 'xxx',
    Description: 'descripcion xxxxx',
    Unit_price: 10,
    Stock: 2,
    New_order_level: 'nose que debe ser esta columna',
    Branch_office: 'YY'
   },
   {
    Barcode: 123456789,
    Name: 'xxy',
    Description: 'descripcion xxxxx',
    Unit_price: 10,
    Stock: 2,
    New_order_level: 'nose que debe ser esta columna',
    Branch_office: 'YY'
   },
   {
    Barcode: 123456789,
    Name: 'xyy',
    Description: 'descripcion xxxxx',
    Unit_price: 10,
    Stock: 2,
    New_order_level: 'nose que debe ser esta columna',
    Branch_office: 'YY'
   },
   {
    Barcode: 123456789,
    Name: 'yyy',
    Description: 'descripcion xxxxx',
    Unit_price: 10,
    Stock: 2,
    New_order_level: 'nose que debe ser esta columna',
    Branch_office: 'YY'
   },
   {
    Barcode: 123456789,
    Name: 'yyx',
    Description: 'descripcion xxxxx',
    Unit_price: 10,
    Stock: 2,
    New_order_level: 'nose que debe ser esta columna',
    Branch_office: 'YY'
   }
]

async function createAllTextProducts () {
  const { ProductsModel, ProviderModel } = await setupDB(config).catch(handleFatalError) // aqui inicializamos la Base de Datos y tambien creamos las tablas con sus modelos y relaciones provider y products      
  if (!ProductsModel || !ProviderModel) {
    console.log(`${chalk.red('ProductModel or ProviderModel not found: ')} ${ProductsModel} --- ${ProviderModel}`)
    handleFatalError(new Error(`ProductModel or ProviderModel not found: ${ProductsModel} --- ${ProviderModel}`))
  }
  const provider = await database.find(ProviderModel, {
    where: {
      Name: providerName
    }
  })
  if (!provider) {
    console.log(`${chalk.red('The provider with the Name: ')}${providerName} ${chalk.red('does not exist, please create it and then proceed to create those products again.')}`)
    process.exit(0)
  }
  console.log(`${chalk.bold.blue('Creating the products')}`)
  for (const productObject of products) {
    debug(`${chalk.green('Starting the creation of product:')} ${productObject.Name}`)
    const resoult = await createTextProducts(productObject, ProductsModel)
    if (resoult) console.log(JSON.stringify(resoult))
  }
  console.log(`${chalk.bold.green('Ok all done with the creation of the products')}`)
  if (!module.parent) {
    process.exit(0)
  }  
}

async function createTextProducts (productToCreate, ProductsModel) {
  try {
    const condition = {
      where: {
        Name: productToCreate.Name
      }
    }
    const product = await database.find(ProductsModel, condition)
    if (!product) { // si no encuentra al producto, lo crea
      debug(`${chalk.green('the product doesnt exist!:')} ${productToCreate.Name}`)
      // buscamos el proveedor para verificar que exista y proceder a asignarlo al nuevo producto a crear y crearlo
      Object.assign(productToCreate, { last_provider: providerName }) // si el proveedor existe, al objeto producto le agrega el Name del proveedor en providerId

      const newProduct = await database.create(ProductsModel, productToCreate)
      if (newProduct.Name) {
        console.log(`${chalk.green('New product created: ')}${newProduct.Name}`)
      }

      return newProduct
    }
    console.log(`${chalk.red('Impossible to create this product because it already exists: ')}${product.Name}`)
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
  module.exports = {createAllTextProducts}
} else {
  createAllTextProducts()
}
