const bcrypt = require('bcrypt')
const config = require('config')

const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, config.get('auth.saltRounds'))
    
    return hashedPassword
}

const compare = async (password, hashedPassword) => {
    const isValid = await bcrypt.compare(password, hashedPassword)

    return isValid
}

module.exports = {
    hashPassword,
    compare
}