const apiKeysController = require('../controllers/apiKeys')
const usersController = require('../controllers/users')
const authentication = require('../middlewares/authentication')

const bind = app => {
    app.get('/health', (req, res, next) => res.status(200).json({ message: 'Im alive!' }))

    app.post('/v1/users', usersController.createUser)
    app.post('/v1/users/login', usersController.login)
    
    app.post('/v1/apiKeys', apiKeysController.createApiKey)
    app.post('/v1/apiKeys/:id/disable', apiKeysController.disableApiKey)
    app.get('/v1/apiKeys', apiKeysController.getApiKeys)
    app.get('/v1/apiKeys/:id', apiKeysController.getApiKey)
}

module.exports = { bind }