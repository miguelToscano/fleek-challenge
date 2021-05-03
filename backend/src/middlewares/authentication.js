const errors = require('../utils/errors')
const usersService = require('../services/users')
const tokens = require('../utils/tokens')

const authenticateUser = async (req, res, next) => {
    try {
        const { authorization: token } = req.headers

        if (!token) {
            throw errors.createError(401, 'Unauthorized')
        }

        const decodedToken = tokens.decodeToken(token)

        if (!decodedToken) {
            throw errors.createError(401, 'Unauthorized')
        }

        const user = await usersService.getUserByEmail(decodedToken.email)

        if (!user) {
            throw errors.createError(401, 'Unauthorized')
        }

        return next()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    authenticateUser
}