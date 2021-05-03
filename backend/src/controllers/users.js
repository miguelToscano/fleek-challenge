const usersService = require('../services/users')

const createUser = async (req, res, next) => {
    try {
        const result = await usersService.createUser(req.body)

        return res.status(201).json({ user: result })
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const result = await usersService.login(req.body)

        return res.status(200).json({ authorization: result })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser,
    login
}