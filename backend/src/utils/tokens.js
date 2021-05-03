const jwt = require('jsonwebtoken')
const config = require('config')

const createToken = async (email) => {
    const token = await jwt.sign({ email }, config.get('auth.secret'), { expiresIn: config.get('auth.expirationTime') })

    return {
        type: 'JWT',
        token,
        expiresIn: '180000s'
    }
}

const decodeToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, config.get('auth.secret'))

        return decodedToken
    } catch (error) {
        return null
    }
}

module.exports = {
    createToken,
    decodeToken
}