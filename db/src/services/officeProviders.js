'use strict'

const database = require('../lib/postgresql')

module.exports = function officeProvidersServices (OfficeProvidersModel) {
  async function findAllOfficeProviders (order) {
    if (order) return database.findAll(OfficeProvidersModel, order)
    return database.findAll(OfficeProvidersModel)
  }

  /*async function createOrUpdateOfficeProvider (OfficeProvidersToCreateOrUpdate, productModel) {
    const condition = {
      where: {
        Name: OfficeProvidersToCreateOrUpdate.Name
      }
    }

    const provider = await database.find(OfficeProvidersModel, condition)
    if (!provider) { // si no encuentra al OfficeProviders, lo crea
      return database.create(OfficeProvidersModel, OfficeProvidersToCreateOrUpdate)
    }

    // si encuentra el proveedor, lo actualiza
    const updated = await database.update(OfficeProvidersModel, OfficeProvidersToCreateOrUpdate, condition)
    return updated ? database.find(OfficeProvidersModel, condition) : provider // actualizo? devuelva el nuevo objeto actualizado, no actualizo? devuelva el objeto sin actualizar que habiamos encontrado antes
  }*/
  return {
    findAllOfficeProviders
  }
}
