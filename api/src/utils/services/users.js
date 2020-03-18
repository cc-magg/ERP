'use strict'

const bcrypt = require('bcryptjs')
const database = require('../../lib/mongo')
const usercustomSchema = require('../../mongooseModels/customusers')

class UsersService {
  constructor () {
    this.collection = 'customusers'
    this.modelName = 'customUsers'
    this.MongoLib = database
  }

  async getAllUsers () {
    const resultado = await this.MongoLib.getAll(this.collection, this.modelName, usercustomSchema)
    return resultado
  }

  async getUser (email) {
    const resultado = await this.MongoLib.get(this.collection, this.modelName, usercustomSchema, { email })
    return resultado
  }

  async createUser (newUserObject) {
    /* const validation = await joiSchema.exampleUserSchema.validate(newUserObject)
    console.log('validacion:')
    console.log(validation)
    if (validation.error) {
      console.log('no paso la validacion')
      return validation.error.details[0].message
    } else {
      console.log('paso la validacion') */
    const { name, password, isAdmin, age, email, createdAt } = newUserObject
    const hashedPasswrod = await bcrypt.hash(password, 10)
    const resultado = await this.MongoLib.create(this.collection, this.modelName, usercustomSchema, {
      name,
      password: hashedPasswrod,
      isAdmin: Boolean(isAdmin),
      age,
      email,
      createdAt
    })
    return resultado._id
    // }
  }
}

module.exports = new UsersService()
