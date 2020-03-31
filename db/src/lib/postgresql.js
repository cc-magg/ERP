'use strict'

function findById (id) {

}

/**
 * Parametros:
 * @param {*} model 
 * @param {*} order Es opcional, y si se manda debe ser por ejemplo:
 * order = [
 *  ['Name', 'DESC']
 * ]
 * o
 * order = [
 *  ['Name', 'ASC']
 * ]
 */
async function findAll (model, order) {
  if (order) return model.findAll({ order })
  return model.findAll() // devuelve un array de objetos [{item1},{item2},...]
}

async function find (model, query) {
  const item = await model.findOne(query)
  return item
}

async function create (model, newItem, includeObject) {
  let result = null
  if (includeObject) {
    result = await model.create(newItem, includeObject) // si recibimos un include entonces creamos el item con la asociacion que se mando en include
    return result.toJSON()
  }
  result = await model.create(newItem)
  return result.toJSON()
}

async function update (model, itemToUpdate, conditional) {
  const updated = await model.update(itemToUpdate, conditional)
  return updated
}

module.exports = {
  findById,
  findAll,
  find,
  create,
  update
}
