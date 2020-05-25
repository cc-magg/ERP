'use strict'

const database = require('../lib/postgresql')

module.exports = function officelocationServices (OfficelocationModel) {
  async function findAllOfficelocations (order) {
    if (order) return database.findAll(OfficelocationModel, order)
    return database.findAll(OfficelocationModel)
  }

  async function createOrUpdateOfficelocation (officelocationToCreateOrUpdate) {
    const condition = {
      where: {
        Name: officelocationToCreateOrUpdate.Name
      }
    }

    const officelocation = await database.find(OfficelocationModel, condition)
    if (!officelocation) { // si no encuentra al proveedor, lo crea
      return database.create(OfficelocationModel, officelocationToCreateOrUpdate)
    }

    // si encuentra el officelocation, lo actualiza
    const updated = await database.update(OfficelocationModel, officelocationToCreateOrUpdate, condition)
    return updated ? database.find(OfficelocationModel, condition) : officelocation // actualizo? devuelva el nuevo objeto actualizado, no actualizo? devuelva el objeto sin actualizar que habiamos encontrado antes
  }
  return {
    findAllOfficelocations,
    createOrUpdateOfficelocation
  }
}
