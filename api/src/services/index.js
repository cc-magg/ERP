'use strict'

const userServices = require('../lib/mongo')
const { UserSchema } = require('../joiSchemas/users')

module.exports = {
  user: userServices(UserSchema)
}
