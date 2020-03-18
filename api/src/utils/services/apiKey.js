'use strict'

const database = require('../../lib/mongo')
const keySchema = require('../../mongooseModels/keys')

class ApiKeysService {
  constructor () {
    this.collection = 'apikeys'
    this.modelName = 'key'
    this.MongoLib = database
  }

  async getApiKey (token) {
    const apiKey = await this.MongoLib.get(this.collection, this.modelName, keySchema, { token })
    return apiKey
  }
}

module.exports = new ApiKeysService()
