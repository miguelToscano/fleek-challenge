const mongoose = require('mongoose')
const config = require('config')
const app = require('./app')
const usersService = require('../services/users')

const port = config.get('api.port') || 8080

// docker run -p 27018:27017 --rm --name fleek-db -d mongo
Promise.resolve()
  .then(() => mongoose.connect(`mongodb://${config.get('database.host')}:${config.get('database.port')}/${config.get('database.name')}`))
  .then(() => usersService.createUser({ email: 'admin@fleek.us', password: 'fleek' }))
  .then(() => {
    app.listen(port)
    console.log(`Listening on port: ${port}...`)
  })
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })