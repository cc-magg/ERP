'use strict'

const database = require('../lib/postgresql')
const chalk = require('chalk')
const debug = require('debug')('ERP:db:services:product')

const setupProductModelv2 = require('../sequelizeModels/productv2')
const setupDatabase = require('../lib/db')
const { config } = require('../../config')
const { QueryTypes }  = require('sequelize')
const dateFormat = require('dateformat')

module.exports = function productsServices (ProductModel, OrderModel, OfficeProvidersModel, ProviderModel) {
  async function findAllProducts (requestFilterOptions) {
    let options = {}

    if (requestFilterOptions.orderedBy) {
      const arrayOrderedBy = []
      arrayOrderedBy.push(requestFilterOptions.orderedBy.split(',')) // arrayOrderedBy = [["Name","DESC"]]
      options.order = arrayOrderedBy // options = { order: [["Name","DESC"]] }
    }

    if (requestFilterOptions.provider) {
      options.include = [
        { 
          model: OrderModel,
          required : true ,// <----- Make sure will create inner join
          include: [
            {
              model: OfficeProvidersModel,
              required : true , // <----- Make sure will create inner join
              include: [
                {
                    model: ProviderModel,
                    required : true , // <----- Make sure will create inner join
                    where : { 'Name' : requestFilterOptions.provider } // <-------- Here
                }
              ]
            }
          ]
        }
      ]
    }

    if (requestFilterOptions.productPosition) {
      // if (!("include" in options)) {} // si no existe 'include' en el objeto options
      options.where = { 'Position' : requestFilterOptions.productPosition }
    }

    let productsObject = await database.findAll(ProductModel, options)
    if (productsObject.length > 0 && productsObject[0].orders) { // Si en el query se reciben las opciones de 'provider' esteservicio va a obtener de respuesta un objeto con toda la informacion de la tabla product y tambien de todas las otras tablas comenzando con 'orders' entonces aqui removeremos esas otras tablas quitando la key 'orders' del objeto producto.
      let newProductsList = []
      // console.log('COMPLETO----------- '+JSON.stringify(productsObject))
      productsObject.forEach(product => {
        let newProduct = {}
        // console.log('PRODUCTO------------ '+JSON.stringify(product)+'----'+typeof product)
        const productObject = product.dataValues
        for (const key in productObject) {
          if (key !== 'orders') {
            newProduct[key] = productObject[key]
          }
        }
        newProductsList.push(newProduct)
        // console.log('--'+JSON.stringify(newProductsList))
      })
      return newProductsList
    }
    return productsObject
  }

  async function findProductByName (Name) {
    const query = {
      where: {
        Name
      }
    }
    return database.findOne(ProductModel, query)
  }

  async function createOrUpdateProduct (productToCreateOrUpdate, providerName) {
    const condition = {
      where: {
        Name: productToCreateOrUpdate.Name
      }
    }

    const product = await database.find(ProductModel, condition)
    if (!product) { // si no encuentra al producto, lo crea
        
      const newProduct = await database.create(ProductModel, productToCreateOrUpdate)
      if (newProduct.Name) {
        console.log(`${chalk.green('New product created: ')}${newProduct.Name}`)
      }

      return newProduct
    }

    // si encuentra el producto, lo actualiza
    const updated = await database.update(ProductModel, productToCreateOrUpdate, condition)
    //const updatedProduct =  // actualizo? devuelva el nuevo objeto actualizado, no actualizo? devuelva el objeto sin actualizar que habiamos encontrado antes
    console.log(updated ? `${chalk.green('Product updated from:')} ${JSON.stringify(product)} ${chalk.green('To this:')} ${JSON.stringify(productToCreateOrUpdate)}` : `${chalk.red("Couln't update product:")} ${JSON.stringify(product)}`)
    return updated ? database.find(ProductModel, condition) : product
  }

  async function createProductsBackup (table_name, actualDate) {
    const sequelize = setupDatabase(config)
    /*const backupDate = dateFormat(new Date(), "isoDateTime")
    console.log(backupDate)*/
    const table_name_with_version = table_name+"Backup_"+actualDate
    const ProductBackupModel = await sequelize.define(table_name_with_version, setupProductModelv2, {freezeTableName: true})

    if (!ProductBackupModel) {
      debug(`${chalk.red('Missing ProductBackupModel:')} ${ProductBackupModel}`)
      //handleFatalError(new Error(`Missing ProductBackupModel: ${ProductBackupModel}`))
    }

    await sequelize.authenticate()
    console.log(`${chalk.green('Creating the products backup table.')}`)
    await sequelize.sync() // This creates the table if it doesn't exist (and does nothing if it already exists), more here https://sequelize.org/master/manual/model-basics.html

    console.log(`${chalk.bold.blue('Creating the products backup before deleting all the data of products.')}`)

    sequelize.query('INSERT INTO "'+table_name_with_version+'" SELECT * FROM "'+table_name+'";')

    console.log(`${chalk.bold.blue('Backup created')} ${table_name_with_version}.`)
    return ProductBackupModel
  }

  async function tableReset (tableName) {
    console.log(`${chalk.bold.blue('Reseting table')} ${tableName}.`)
    const sequelize = setupDatabase(config)
    sequelize.query('DELETE FROM "'+tableName+'";')
  }

  return {
    findAllProducts,
    findProductByName,
    createOrUpdateProduct,
    createProductsBackup,
    tableReset
  }
}
