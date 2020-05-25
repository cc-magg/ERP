'use strict'

const database = require('../lib/postgresql')
const Boom = require('@hapi/boom')

module.exports = function providerServices (OrderModel) {
  async function findAllOrders (orderBy) {
    if (orderBy) return database.findAll(OrderModel, orderBy)
    return database.findAll(OrderModel)
  }

  async function findOrderByNumber (Number) {
    const condition = {
      where: {
        Number
      }
    }
    return database.find(OrderModel, condition)
  }

  async function createOrder (OrderToCreate) {
    const condition = {
      where: {
        Number: OrderToCreate.Number
      }
    }

    const order = await database.find(OrderModel, condition)
    if (!order) { // si no encuentra al proveedor, lo crea
      return database.create(OrderModel, OrderToCreate)
    }

    return Boom.badRequest(`The order number ${OrderToCreate.Number} already exist`)
  }

  async function updateOrder (OrderToUpdate) {
    const condition = {
      where: {
        Number: OrderToUpdate.Number
      }
    }

    const order = await database.find(OrderModel, condition)
    if (!order) { // si no encuentra al proveedor, lo crea
      return Boom.badRequest(`The order number ${OrderToUpdate.Number} doesn't exist`)
    }

    const updated = await database.update(OrderModel, OrderToUpdate, condition)
    return updated ? database.find(OrderModel, condition) : order // actualizo? devuelva el nuevo objeto actualizado, no actualizo? devuelva el objeto sin actualizar que habiamos encontrado antes
  }
  return {
    findAllOrders,
    findOrderByNumber,
    createOrder,
    updateOrder
  }
}
