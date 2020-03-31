'use strict'

// require('longjohn')
const setupDatabase = require('./src/lib/db')
const setupProductsModel = require('./src/sequelizeModels/products')
const setupProviderModel = require('./src/sequelizeModels/provider')
const productsServices = require('./src/services/products')
const providersServices = require('./src/services/provider')
module.exports = async function (config) {

  const sequelize = await setupDatabase(config) // base de datos conectada e instanciada
  const ProductsModel = await setupProductsModel(config) // volvemos a conectarnos a la base de datos y la instanciamos, definimos los modelos (tablas y sus respectivas columnas y restricciones) de products
  const ProviderModel = await setupProviderModel(config)

  // Aqui crea las relaciones entre las tablas Agent y Metric
  ProviderModel.hasMany(ProductsModel, { foreignKey: 'last_provider' }) // esto agrega a la tabla products la columna providerId y podemos usar provider.setproduct(para asignar un producto a un proveedor) y provider.getproduct(para encontrar todos los productos de un proveedor)
  ProductsModel.belongsTo(ProviderModel, { foreignKey: 'last_provider' }) // esto agrega a la tabla products la columna providerId y le pone el id del provider y nos permite usar product.getprovider(nos permite encontrar al agente de cierta metrica)
  //ProductsModel.belongsTo(ProviderModel, { foreignKey: 'providerName' })

  // Aqui (es funcion promesa) verificamos que la conexion a la base de datos este funcionando y este lo hace realizando una operacion muy basica como una suma
  await sequelize.authenticate()

  if (config.setup) { // pregunta si la configuracion tiene la propiedad de setup lista(si setup = true)
    // sincroniza la bd en el servidor (sequelize.async)
    // force: true quiere decir borrela y cree una nueva (base de datos)
    await sequelize.sync({ force: true })
  }

  return {
    Product: {
      productServices: productsServices(ProductsModel, ProviderModel),
      ProviderModel
    },
    Provider: {
      providerServices: providersServices(ProviderModel),
      ProductsModel
    }
  }
}
