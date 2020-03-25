'use strict'

// settings Server
const serverPort = process.env.PORT || 8000
const dev = process.env.NODE_ENV !== 'production' // si el entorno es diferente a produccion, dev = true
const config = {
  googleClientId: process.env.GOOGLE_CLIENT_ID || '484011279672-pmjs5ta7itkknu6d51hr11pe6nped8ui.apps.googleusercontent.com', // esta info se saca de: https://console.developers.google.com/
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || 'hyoK0KVMaFSYpEvjLF3UcDeH',
  apiUrl: process.env.API_URL || 'http://localhost:3000'
}
module.exports = {
  serverPort,
  dev,
  config
}
