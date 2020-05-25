'use strict'

const chalk = require('chalk')
const debug = require('debug')('ERP:db:index')

// require('longjohn')
const setupDatabase = require('./src/lib/db')

// Models
const setupOfficelocationModel = require('./src/sequelizeModels/officelocation')
const setupProviderModel = require('./src/sequelizeModels/provider')
const setupOfficeProvidersModel = require('./src/sequelizeModels/officeProviders')
const setupOrderModel = require('./src/sequelizeModels/order')
const setupProductModel = require('./src/sequelizeModels/product')
const setupProductModelv2 = require('./src/sequelizeModels/productv2')
const setupOrderProductsModel = require('./src/sequelizeModels/orderProducts')
const setupOrderProductsModelv2 = require('./src/sequelizeModels/orderProductsv2')

// Services
const officelocationServices = require('./src/services/officelocation')
const providerServices = require('./src/services/provider')
const officeProvidersServices = require('./src/services/officeProviders')

const orderServices = require('./src/services/order')
const productServices = require('./src/services/product')

module.exports = async function (config) {
  const sequelize = await setupDatabase(config) // base de datos conectada e instanciada

  // Models Setup
  const OfficelocationModel = await setupOfficelocationModel(config)
  const ProviderModel = await setupProviderModel(config)
  const OfficeProvidersModel = await setupOfficeProvidersModel(config)
  const OrderModel = await setupOrderModel(config)
  //const ProductModel = await setupProductModel(config) // volvemos a conectarnos a la base de datos y la instanciamos, definimos los modelos (tablas y sus respectivas columnas y restricciones) de products
  //const OrderProductsModel = await setupOrderProductsModel(config)

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

  let allServices = {
    officelocationServices: officelocationServices(OfficelocationModel),
    providerServices: providerServices(ProviderModel),
    officeProvidersServices: officeProvidersServices(OfficeProvidersModel),
    OfficelocationModel,
    ProviderModel,
    OfficeProvidersModel,
    OrderModel
  }

  const AllPSQLTables = await sequelize.query("select table_name from information_schema.tables WHERE table_schema = 'public'")
  let tables = AllPSQLTables[0] // este es un array de objetos asi: [{"table_name":"officelocations"},...]

  tables.forEach(async function (element) {
    
    const table_name = element.table_name
    if (table_name.match(/Products/) && table_name.match(/^(?!$)(?!.*(order|Order))/)) { // busco que el nombre de la tabla: contenga 'Products' y no contenga ni 'order' ni 'Order'
      debug(`find a table of products that was created dinamically: ${chalk.green(table_name)}`)
      const officeName = table_name.substring(0, (table_name.length-8))

      tables.forEach(async function (element2) { // ahora, como encontramos una tabla de productos de alguna sede, procedemos a buscar la tabla orderproducts de la misma sede para reiniciarla tambien.
        const table_name2 = element2.table_name
        const tableOrderProductsCompleteName = officeName+'OrderProducts'
        const re = new RegExp(tableOrderProductsCompleteName,"g")
        if (table_name2.match(re)) { // busco que el nombre de la tabla contenga: '<officeName>OrderProducts'
          debug(`find a table of OrderProducts that was created dinamically: ${chalk.green(table_name2)}`)

          const ProductModel = await sequelize.define(table_name, setupProductModelv2)
          const OrderProductsModel = await sequelize.define(table_name2, setupOrderProductsModelv2)
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

          const serviceName = table_name+'Services'
          allServices[serviceName] = productServices(ProductModel)
          console.log('Dinamyc service created: '+serviceName)
        }
      })
    }
  })

  if (config.setup) { // pregunta si la configuracion tiene la propiedad de setup lista(si setup = true)
    // sincroniza la bd en el servidor (sequelize.async)
    // force: true quiere decir borrela y cree una nueva (base de datos)
    await sequelize.sync({ force: true })
  }

  return allServices
}
