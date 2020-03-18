'use strict'

const { Schema } = require('mongoose')

const userSchema = new Schema({
  _id: { type: Schema.ObjectId, auto: true },
  name: String,
  password: String,
  isAdmin: Boolean,
  age: Number,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = userSchema
