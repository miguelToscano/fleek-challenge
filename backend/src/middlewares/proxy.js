const errors = require('../utils/errors')
const apiKeysService = require('../services/apiKeys')
const requests = require('../models/Request')

const authenticateApiKey = async (proxyReq, req, res) => {
    try {
        if (!req.headers.api_key) {
            throw errors.createError(401, 'Unauthorized')
        }

        const apiKey = await apiKeysService.getApiKeyByValue(req.headers.api_key)

        if (!apiKey) {
            throw errors.createError(401, 'Unauthorized')
        }

        if (apiKey.active === false) {
            throw errors.createError(401, 'Unauthorized')
        }

        return 
    } catch (error) {
        return res.status(error.statusCode).json({ message: error.message, status: error.statusCode }).end()
    }
}

const saveRequest = async (proxyReq, req, res) => {
    try {
        const apiKey = await apiKeysService.getApiKeyByValue(req.headers.api_key)

        const newRequest = new requests.RequestModel

        newRequest.path = proxyReq.path
        newRequest.createdAt = String(Date('MM/DD/YYYY-hh:mm:ss'))

        await apiKeysService.addRequest(apiKey, newRequest)

        return
    } catch (error) {
        return res.status(error.statusCode).json({ message: error.message, status: error.statusCode }).end()
    }
}

module.exports = {
    authenticateApiKey,
    saveRequest
}