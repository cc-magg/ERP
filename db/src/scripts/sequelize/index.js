'use strict'

// require('longjohn')
const setupDatabase = require('../../lib/db')

// Models
const setupOfficelocationModel = require('../../sequelizeModels/officelocation')
const setupProviderModel = require('../../sequelizeModels/provider')
const setupOfficeProvidersModel = require('../../sequelizeModels/officeProviders')
const setupOrderModel = require('../../sequelizeModels/order')
const setupProductModel = require('../../sequelizeModels/product')
const setupOrderProductsModel = require('../../sequelizeModels/orderProducts')

// Services
const officelocationServices = require('../../services/officelocation')
const providerServices = require('../../services/provider')
const orderServices = require('../../services/order')
const productServices = require('../../services/product')

module.exports = async function (config) {
  const sequelize = await setupDatabase(config) // base de datos conectada e instanciada

  // Models Setup
  const OfficelocationModel = await setupOfficelocationModel(config)
  const ProviderModel = await setupProviderModel(config)
  const OfficeProvidersModel = await setupOfficeProvidersModel(config)
  const OrderModel = await setupOrderModel(config)
  /*const ProductModel = await setupProductModel(config) // volvemos a conectarnos a la base de datos y la instanciamos, definimos los modelos (tablas y sus respectivas columnas y restricciones) de products
  const OrderProductsModel = await setupOrderProductsModel(config)*/

  /**
   * RELATION 'SUPER MANY-TO-MANY' of officeLocation and provider
   * with this relation we can use:
   * OfficeLocationModel.findAll({ include: ProviderModel }) // este es gracias a la relacion many-to-many
   * ProviderModel.findAll({ include: OfficeLocationModel }) // este es gracias a la relacion many-to-many
   * OfficelocationModel.findAll({ include: OfficeProvidersModel }) // este es gracias a la relacion one-to-many
   * ProviderModel.findAll({ include: OfficeProvidersModel }) // este es gracias a la relacion one-to-many
   * OfficeProvidersModel.findAll({ include: OfficelocationModel }) // este es gracias a la relacion one-to-many
   * OfficeProvidersModel.findAll({ include: ProviderModel }) // este es gracias a la relacion one-to-many
   */
  OfficelocationModel.belongsToMany(ProviderModel, {
    through: OfficeProvidersModel,
    foreignKey: 'Office_id'
  })
  ProviderModel.belongsToMany(OfficelocationModel, {
    through: OfficeProvidersModel,
    foreignKey: 'Provider_id'
  })
  OfficelocationModel.hasMany(OfficeProvidersModel, { foreignKey: 'Office_id' })
  OfficeProvidersModel.belongsTo(OfficelocationModel, { foreignKey: 'Office_id' })
  ProviderModel.hasMany(OfficeProvidersModel, { foreignKey: 'Provider_id' })
  OfficeProvidersModel.belongsTo(ProviderModel, { foreignKey: 'Provider_id' })

  /**
   * RELATION 'ONE-TO-MANY' of officeProviders and order
   * with this relation we can use:
   * OfficeProvidersModel.findAll({ include: OrderModel }) // este es gracias a la relacion one-to-many
   * OrderModel.findAll({ include: OfficeProvidersModel }) // este es gracias a la relacion one-to-many
   */
  OfficeProvidersModel.hasMany(OrderModel, { foreignKey: 'OfficeProviders_id' })
  OrderModel.belongsTo(OfficeProvidersModel, { foreignKey: 'OfficeProviders_id' })

  /**
   * RELATION 'SUPER MANY-TO-MANY' of product and order
   * with this relation we can use:
   * OrderModel.findAll({ include: ProductModel }) // este es gracias a la relacion many-to-many
   * ProductModel.findAll({ include: OrderModel }) // este es gracias a la relacion many-to-many
   * OrderModel.findAll({ include: OrderProductsModel }) // este es gracias a la relacion one-to-many
   * ProductModel.findAll({ include: OrderProductsModel }) // este es gracias a la relacion one-to-many
   * OrderProductsModel.findAll({ include: OrderModel }) // este es gracias a la relacion one-to-many
   * OrderProductsModel.findAll({ include: ProductModel }) // este es gracias a la relacion one-to-many
   */
  /*OrderModel.belongsToMany(ProductModel, {
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
  OrderProductsModel.belongsTo(ProductModel, { foreignKey: 'Product_id' })*/

  // Aqui (es funcion promesa) verificamos que la conexion a la base de datos este funcionando y este lo hace realizando una operacion muy basica como una suma
  await sequelize.authenticate()

  if (config.setup) { // pregunta si la configuracion tiene la propiedad de setup lista(si setup = true)
    // sincroniza la bd en el servidor (sequelize.async)
    // force: true quiere decir borrela y cree una nueva (base de datos)
    await sequelize.sync({ force: true })
  }

  return {
    /*officelocationServices: officelocationServices(OfficelocationModel),
    providerServices: providerServices(ProviderModel),
    orderServices: orderServices(ordersModel),
    productServices: productServices(ProductModel),*/
    OfficelocationModel,
    ProviderModel,
    OfficeProvidersModel,
    OrderModel
  }
}
