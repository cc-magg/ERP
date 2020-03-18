'use strict'

const { Schema } = require('mongoose')

const keySchema = new Schema({
  _id: { type: Schema.ObjectId, auto: true },
  token: String,
  scopes: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = keySchema
