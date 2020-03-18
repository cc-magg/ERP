// npm run seed-keys
'use strict'

const chalk = require('chalk')
const crypto = require('crypto')
const debug = require('debug')('app:scripts:api-keys')
const MongoLib = require('../../lib/mongo')
const keySchema = require('../../mongooseModels/keys')

const adminScopes = [
  'signin:auth',
  'signup:auth',
  'read:movies',
  'create:movies',
  'update:movies',
  'delete:movies',
  'read:user-movies',
  'create:user-movies',
  'delete:user-movies'
]

const publicScopes = [
  'signin:auth',
  'signup:auth',
  'read:movies',
  'read:user-movies',
  'create:user-movies',
  'delete:user-movies'
]

const apiKeys = [
  {
    token: generateRandomToken(),
    scopes: adminScopes
  },
  {
    token: generateRandomToken(),
    scopes: publicScopes
  }
]

function generateRandomToken () {
  /**
  * crea un valor (de 32bits de largo) aleatorio fuerte (bien raros los valores que saca, y mejor asi ya que estos se usaran como keys,
  * por ejemplo me tiro esto en hexadecimal: d684eea9e3db28ddaed1e44befac57fcd877b7821e46aec4087d5e34600ffedc
  * que en string es: Öî©ãÛ(Ý®ÑäKï¬WüØw·F®Ä}^4`þÜ),
  * y lo retornamos en formato hexadecimal
  */
  const buffer = crypto.randomBytes(32)
  return buffer.toString('hex')
}

async function seedApiKeys () {
  try {
    const mongoDB = MongoLib
    const db = await mongoDB._connect()
    const promises = apiKeys.map(async apiKey => {
      await mongoDB.create('apikeys', 'key', keySchema, apiKey, db) // collection, modelName, mongoDbSchema, args, db
    })

    await Promise.all(promises)
    debug(chalk.green(`${promises.length} api keys have been created succesfully`))
    return process.exit(0)
  } catch (error) {
    debug(chalk.red(error))
    process.exit(1)
  }
}

seedApiKeys()
