'use strict'

const database = require('../lib/postgresql')
const chalk = require('chalk')

module.exports = function productsServices (ProductModel) {
  async function findAllProducts (orderedBy) {
    if (orderedBy) {
      const arrayOrderedBy = []
      arrayOrderedBy.push(orderedBy.split(',')) // arrayOrderedBy = [["Name","DESC"]]
      return database.findAll(ProductModel, { order: arrayOrderedBy }) // options = { order: [["Name","DESC"]] }
    }
    return database.findAll(ProductModel)
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
  return {
    findAllProducts,
    findProductByName,
    createOrUpdateProduct
  }
}
