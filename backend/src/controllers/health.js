const mongoose = require('mongoose')
const config = require('config')

const check = async (req, res, next) => {
    try {
        await mongoose.connect(`mongodb://${config.get('database.host')}:${config.get('database.port')}/${config.get('database.name')}`)

        return res.status(200).json({ message: 'Im alive!' })
    } catch (error) {
        throw error
    }
}

module.exports = {
    check
}