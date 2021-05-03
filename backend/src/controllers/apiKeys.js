const apiKeysService = require('../services/apiKeys')

const createApiKey = async (req, res, next) => {
    try {
        const result = await apiKeysService.createApiKey()

        return res.status(201).json({ apiKey: result })
    } catch (error) {
        next(error)
    }
}

const getApiKeys  = async (req, res, next) => {
    try {
        const result = await apiKeysService.getApiKeys()

        return res.status(200).json({ amount: result ? result.length : 0, apiKeys: result })
    } catch (error) {
        next(error)
    }
}

const getApiKey  = async (req, res, next) => {
    try {
        const result = await apiKeysService.getApiKeyById(req.params.id)
        console.log("ENTRA AL CONTROLLER")
        console.log({ apiKey: result })
        return res.status(200).json({ apiKey: result })
    } catch (error) {
        next(error)
    }
}

const disableApiKey  = async (req, res, next) => {
    try {
        const result = await apiKeysService.disableApiKey(req.params.id)

        return res.status(201).json({ apiKeys: result })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createApiKey,
    getApiKeys,
    disableApiKey,
    getApiKey
}