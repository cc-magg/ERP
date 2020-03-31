'use strict'

const database = require('../lib/postgresql')
const chalk = require('chalk')

module.exports = function productsServices (ProductModel, ProviderModel) {
  async function findAllProducts (order) {
    if (order) return database.findAll(ProductModel, order)
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
        Barcode: productToCreateOrUpdate.Barcode
      }
    }

    const product = await database.find(ProductModel, condition)
    if (!product) { // si no encuentra al producto, lo crea
        
      // buscamos el proveedor para verificar que exista y proceder a asignarlo al nuevo producto a crear y crearlo
      const provider = await database.find(ProviderModel, {
        where: {
          Name: providerName
        }
      })
      if (!provider) {
        return new Error(`The provider with the Name: ${providerName} doesn't exist, please create it and then proceed to create this product again.`)
      }
      Object.assign(productToCreateOrUpdate, { last_provider: provider.Name }) // si el proveedor existe, al objeto producto le agrega el Name del proveedor en providerId
      
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
