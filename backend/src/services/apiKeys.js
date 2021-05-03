const uuid = require('uuid')
const ApiKeyModel = require('../models/ApiKey')

const createApiKey = async () => {
    try {
        const newApiKey = new ApiKeyModel

        newApiKey.value = uuid.v4()
        newApiKey.active = true
        newApiKey.createdAt = String(Date('MM/DD/YYYY-hh:mm:ss'))
        newApiKey.requests = []
        newApiKey.disabledAt = null
    
        await newApiKey.save()
    
        return newApiKey
    } catch (error) {
        throw errors.createError(500, `Could not create api key with params: ${JSON.stringify(body)}`)
    }
}

const getApiKeys = async () => {
    try {
        const apiKeys = await ApiKeyModel.find()

        return apiKeys
    } catch (error) {
        throw errors.createError(500, 'Could not get api keys')
    }
}

const getApiKeyById = async (id) => {
    try {
        const apiKey = await ApiKeyModel.findOne({ _id: id }).exec()

        if (!apiKey) {
            throw errors.createError(404, `Api key with id: ${value} not found`)
        }

        return apiKey
    } catch (error) {
        throw error
    }
}

const getApiKeyByValue = async (value) => {
    try {
        const apiKey = await ApiKeyModel.findOne({ value }).exec()

        if (!apiKey) {
            throw errors.createError(404, `Api key with value: ${value} not found`)
        }

        return apiKey
    } catch (error) {
        throw error
    }
}

const addRequest = async (apiKey, request) => {
    try {
        apiKey.requests.push(request)

        await apiKey.save()

        return apiKey
    } catch (error) {
        throw error
    }
}

const disableApiKey = async (id) => {
    try {
        const apiKey = await ApiKeyModel.findById(id).exec()

        if (!apiKey) {
            throw errors.createError(404, `Api key with id: ${id} not found`)
        }

        const update = await apiKey.update({ active: false })

        if (!update) {
            throw errors.createError(500, `Could not disable api key with id: ${id}`)
        }

        return apiKey
    } catch (error) {
        throw error
    }
}

module.exports = {
    createApiKey,
    getApiKeys,
    getApiKeyByValue,
    disableApiKey,
    getApiKeyById,
    addRequest
}