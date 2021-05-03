const hashing = require('../utils/hashing')
const tokens = require('../utils/tokens')
const errors =  require('../utils/errors')
const UserModel = require('../models/User')

const createUser = async (body) => {
    try {
        const newUser = new UserModel

        const { email, password } = body

        newUser.email = email
        newUser.hashedPassword = await hashing.hashPassword(password)
        newUser.createdAt = String(Date('MM/DD/YYYY-hh:mm:ss'))

        const result = await newUser.save()

        if (!result) {
            throw errors.createError(500, `Could not create user with params: ${JSON.stringify(body)}`)
        }

        return newUser
    } catch (error) {
        throw error
    }
}

const getUserByEmail = async (email) => {
    try {
        const user = await UserModel.findOne({ email }).exec()

        if (!user) {
            throw errors.createError(404, `User with email: ${email} not found`)
        }

        return user
    } catch (error) {
        throw error
    }
}

const login = async (body) => {
    try {
        const { email, password } = body

        if (!email || !password) {
            throw errors.createError(400, 'Bad request')
        }

        const user = await UserModel.findOne({ email }).exec()
    
        const isValid = await hashing.compare(password, user.hashedPassword)
        
        if (!isValid) {
            throw errors.createError(401, 'Invalid credentials')
        }
    
        return tokens.createToken(user.email)
    } catch (error) {
        throw error
    }
}

module.exports = {
    createUser,
    getUserByEmail,
    login
}