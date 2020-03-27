'use strict'

const jwt = require('jsonwebtoken')
const { defaultConfig } = require('../../../../config')

module.exports = {
  sign: function (payload) {
    return jwt.sign(payload, defaultConfig.authJwtSecret, {
      expiresIn: '15m'
    })
  }
}
