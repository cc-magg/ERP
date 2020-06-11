// "node src/scripts/sequelize/provider.js" to run
// "node src/scripts/sequelize/provider.js -y" to run without asking the question: want to create the products too?
// "npm run seed-provider" to debug
'use strict'

const setupDB = require('./') // con este vamos a configurar la base de datos
const database = require('../../lib/postgresql')
const inquirer = require('inquirer') // librerias explicadas en el txt "platzi node"
const chalk = require('chalk')
const debug = require('debug')('ERP:db:scripts:product')
const { config, products, newOfficelocations } = require('./config')
const setupProductModelv2 = require('../../sequelizeModels/productv2')
const setupOrderProductsModelv2 = require('../../sequelizeModels/orderProductsv2')
const setupDatabase = require('../../lib/db')

async function createAllTestProducts () {
  // Verifico que este creado el order con el que vamos a crear la realacion MANY-TO-MANY para que se cree OrderProducts
  // const { ProductModel, OrderModel } = await setupDB(config).catch(handleFatalError)
  const { OrderModel } = await setupDB(config).catch(handleFatalError)

  // procedo a definir la tabla creada dinamicamente de productos por officelocation y su relacion SUPER MANY-TO-MANY con la tabla 'order'
  const sequelize = setupDatabase(config)
  const ProductModel = await sequelize.define(`${newOfficelocations[0].Name}Product`, setupProductModelv2)
  const OrderProductsModel = await sequelize.define(`${newOfficelocations[0].Name}OrderProduct`, setupOrderProductsModelv2)

  if (!ProductModel || !OrderModel || !OrderProductsModel) {
    debug(`${chalk.red('Missing ProductModel or OrderModel or OrderProductsModel:')} ${ProductModel} - ${OrderModel} - ${$OrderProductsModel}`)
    handleFatalError(new Error(`Missing ProductModel or OrderModel or OrderProductsModel: ${ProductModel} - ${OrderModel} - ${$OrderProductsModel}`))
  }

  // RELATION 'SUPER MANY-TO-MANY' of product and order
  OrderModel.belongsToMany(ProductModel, {
    through: OrderProductsModel,
    foreignKey: 'Order_number'
  })
  ProductModel.belongsToMany(OrderModel, {
    through: OrderProductsModel,
    foreignKey: 'Product_id'
  })
  OrderModel.hasMany(OrderProductsModel, { foreignKey: 'Order_number' })
  OrderProductsModel.belongsTo(OrderModel, { foreignKey: 'Order_number' })
  ProductModel.hasMany(OrderProductsModel, { foreignKey: 'Product_id' })
  OrderProductsModel.belongsTo(ProductModel, { foreignKey: 'Product_id' })

  await sequelize.authenticate()
  await sequelize.sync() // This creates the table if it doesn't exist (and does nothing if it already exists), more here https://sequelize.org/master/manual/model-basics.html

  const Order = await database.find(OrderModel, {})
  if (!Order) {
    console.log(`${chalk.red('There are no Orders, please create it and then proceed to create those products again, (we need atleast 1 order to create the association).')}`)
    process.exit(0)
  }

  // procedo a crear todos los productos y agregandole la relacion MANY-TO-MANY con un OrderProducts
  console.log(`${chalk.bold.blue('Creating the products')}`)
  for (const productObject of products) {
    debug(`${chalk.green('Starting the creation of product:')} ${productObject.Name}`)
    const productCreated = await createTestProduct(productObject, ProductModel, Order)
    if (productCreated) console.log(JSON.stringify(productCreated))
  }
  console.log(`${chalk.bold.green('Ok all done with the creation of the products')}`)
  process.exit(0)
}

async function createTestProduct (productToCreateOrUpdate, ProductModel, Order) {
  try {
    const condition = {
      where: {
        Name: productToCreateOrUpdate.Name
      }
    }
    const productStock = productToCreateOrUpdate.Stock
    let product = await database.find(ProductModel, condition)
    if (!product) { // si no encuentra al pedido, lo crea de lo contrario, si lo encuentra procedemos a actualizarlo y a aumentarle el inventario
      debug(`${chalk.green('the product doesnt exist!:')} ${productToCreateOrUpdate.Number}`)      

      console.log(JSON.stringify(productToCreateOrUpdate))
      const newProduct = await database.create(ProductModel, productToCreateOrUpdate)
      if (newProduct.Name) {
        console.log(`${chalk.green('New product created: ')}${newProduct.Name}`)
        const addMethod = 'add'+ProductModel.name
        const relation = await Order[addMethod](newProduct, { through: { Product_stock: productStock, Product_profit: productToCreateOrUpdate.Percentage_profit } })
        if (!relation) {
          debug(`${chalk.red('Could not ad3d the product to the relation MANY-TO-MANY with order')} ${Order.Number}, proceeding with the creation.`)
          handleFatalError(new Error(`Could not add the product to the relation MANY-TO-MANY with order ${Order.Number}`))
        }
        console.log(`${chalk.green('product added to relation MANY-TO-MANY with order number:')} ${Order.Number}`)
      }
      return await database.find(ProductModel, condition)
    }

    debug(`${chalk.green('the product exist!:')} ${productToCreateOrUpdate.Number}, proceeding with the update of the product.`)  
    const updated = await database.update(ProductModel, productToCreateOrUpdate, condition)
    if (updated) {
      const newProduct = await database.find(ProductModel, condition)
      console.log(`${chalk.green('Product updated from:')} ${JSON.stringify(product)} ${chalk.green('To this:')} ${JSON.stringify(productToCreateOrUpdate)}`)
      return newProduct
    }

    console.log(`${chalk.red("The product could not be updated and Could not add the product to the relation MANY-TO-MANY with order, product:")} ${JSON.stringify(product)}`)
    return product
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
  module.exports = {createAllTestProducts}
} else {
  createAllTestProducts()
}
