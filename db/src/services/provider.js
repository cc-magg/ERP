'use strict'

const database = require('../lib/postgresql')

module.exports = function providerServices (ProviderModel) {
  async function findAllProviders (orderedBy) {
    if (orderedBy) {
      const arrayOrderedBy = []
      arrayOrderedBy.push(orderedBy.split(',')) // arrayOrderedBy = [["Name","DESC"]]
      return database.findAll(ProviderModel, { order: arrayOrderedBy }) // options = { order: [["Name","DESC"]] }
    }
    return database.findAll(ProviderModel)
  }

  async function createOrUpdateProvider (ProviderToCreateOrUpdate, productModel) {
    const condition = {
      where: {
        Name: ProviderToCreateOrUpdate.Name
      }
    }

    const provider = await database.find(ProviderModel, condition)
    if (!provider) { // si no encuentra al proveedor, lo crea
      return database.create(ProviderModel, ProviderToCreateOrUpdate)
    }

    // si encuentra el proveedor, lo actualiza
    const updated = await database.update(ProviderModel, ProviderToCreateOrUpdate, condition)
    return updated ? database.find(ProviderModel, condition) : provider // actualizo? devuelva el nuevo objeto actualizado, no actualizo? devuelva el objeto sin actualizar que habiamos encontrado antes
  }
  return {
    findAllProviders,
    createOrUpdateProvider
  }
}
