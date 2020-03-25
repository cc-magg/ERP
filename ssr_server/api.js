'use strict'

const express = require('express')
const asyncify = require('express-asyncify')

const api = asyncify(express.Router())

api.get('/login/:username/:password', (req, res) => {
  const { username, password } = req.params
  if (username && password) {
    res.send({ username: username, password: password })
  }
})

module.exports = api
