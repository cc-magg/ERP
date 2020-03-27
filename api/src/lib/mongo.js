'use strict'

const mongoose = require('mongoose')
const chalk = require('chalk')

const { mongodb } = require('../../config')

class Database {
  constructor () {
    this.user = encodeURIComponent(mongodb.user)
    this.password = encodeURIComponent(mongodb.password)
    this.host = mongodb.host
    this.port = mongodb.port
    this.dbname = mongodb.dbName
    this.connection = ''
  }

  async _connect () {
    if (this.connection === '') {
      // db connection
      console.log('creando conexion')
      const newConnection = mongoose.createConnection(`mongodb://${this.user}:${this.password}@${this.host}:${this.port}/${this.dbname}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      newConnection.on('error', function (err) {
        console.log(`${chalk.blue('[ERP-mongodb]')} Error: ${err.message}.`, err)
      })
      newConnection.once('open', function () {
        console.log(`${chalk.green('[ERP-mongodb]')} Hi!, mongodb is ready and listening on the port ${this.port}.`)
      })
      await newConnection
      this.connection = newConnection
      /* mongoose.connect(`mongodb://${this.user}:${this.password}@${this.host}:${this.port}/${this.dbName}`, { useNewUrlParser: true, useUnifiedTopology: true }) // esta coneccion se hace o con callbacks o con promesas (es mejor con promesa aun que si se pudiera con async await seria mucho mejor pero ni modo)
        .then(db => console.log(`${chalk.green('[ERP-mongodb]')} Hi!, mongodb is ready and connected to the DB "${this.dbName}" and listening on the port ${this.port}.`))
        .catch(err => console.log(`${chalk.blue('[ERP-mongodb]')} Error: ${err.message}.`)) */
    }
    if (this.connection !== '') return this.connection
  }

  async getAll (collection, modelName, mongoDbSchema, db) {
    db = db || await this._connect() // si no recibe la conexion como parametro, procedemos a crearla
    const MyModel = db.model(modelName, mongoDbSchema, collection)
    const queryResoult = MyModel.find({})
    return queryResoult
  }

  async get (collection, modelName, mongoDbSchema, query, db) {
    db = db || await this._connect() // si no recibe la conexion como parametro, procedemos a crearla
    const MyModel = db.model(modelName, mongoDbSchema, collection)
    const queryResoult = MyModel.findOne(query)
    return queryResoult
  }

  async getById (collection, modelName, mongoDbSchema, id, db) {
    db = db || await this._connect() // si no recibe la conexion como parametro, procedemos a crearla
    const MyModel = db.model(modelName, mongoDbSchema, collection)
    const queryResoult = MyModel.findById(id, function (err, document) {
      if (err) return err

      return document
    })
    //console.log('desde la libreria de mongo: '+JSON.stringify(queryResoult))
    return queryResoult
  }

  /**
   * @param {*} collection es un parametro obligatorio
   * @param {*} modelName es un parametro obligatorio
   * @param {*} mongoDbSchema es un parametro obligatorio
   * @param {*} args es un parametro obligatorio,
   * args = datos a guardar (formato objeto) en la collection.
   * @param {*} db es opcional,
   * es por si queremos desde algun servicio o prueba hacer varios query a la DB de mongo,
   * en este caso unicamente es llamar a la libreria de mongo a la funcion "_connect" y lo que retorne mandarlo a este parametro
   * (esto con el fin de no gastar recursos creando la conexion en cada query, sino que crearia unicamente una conexion) en la siguiente query,
   * hay un ejemplo en el archivo seedUsers.js
   */
  async create (collection, modelName, mongoDbSchema, args, db) {
    db = db || await this._connect() // si no recibe la conexion como parametro, procedemos a crearla
    const MyModel = db.model(modelName, mongoDbSchema, collection)
    const newdocumentInstance = new MyModel(args)
    return new Promise((resolve, reject) => { // retornamos una promesa para que no retorne undefined, sino que apenas retorne, se ponga a trabajar en esta promesa
      newdocumentInstance.save(function (err, response) {
        if (err) return console.error(err)
        resolve(response)
      })
    })
  }
}

module.exports = new Database()

/* const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
        this.dbName = DB_NAME;
    }

    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err) {
                        reject(err);
                    }

                    console.log('Connected succesfully to mongo');
                    resolve(this.client.db(this.dbName));
                });
            });
        }

        return MongoLib.connection;
    }

    getAll(collection, query) {
        return this.connect().then(db => {
            return db
            .collection(collection)
            .find(query)
            .toArray();
        });
    }
}

module.exports = MongoLib; */

/* module.exports = function userServices (user_Joi_Schema) {
    async function createUser (newUser) {
        try {
            return await user_Joi_Schema.validateAsync(newUser)
        }
        catch (err) { return err }
    }
    async function finAll () {
        return
    }
    return {
        createUser
    }
} */
