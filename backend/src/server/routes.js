const healthController = require('../controllers/health')
const apiKeysController = require('../controllers/apiKeys')
const usersController = require('../controllers/users')
const authentication = require('../middlewares/authentication')
const mongoose = require('mongoose')
const config = require('config')

const bind = app => {
    app.get('/health', healthController.check)

    app.post('/v1/users', usersController.createUser)
    app.post('/v1/users/login', usersController.login)
    
    app.post('/v1/apiKeys', [authentication.authenticateUser], apiKeysController.createApiKey)
    app.post('/v1/apiKeys/:id/disable', [authentication.authenticateUser], apiKeysController.disableApiKey)
    app.get('/v1/apiKeys', [authentication.authenticateUser], apiKeysController.getApiKeys)
    app.get('/v1/apiKeys/:id', [authentication.authenticateUser], apiKeysController.getApiKey)
}

module.exports = { bind }