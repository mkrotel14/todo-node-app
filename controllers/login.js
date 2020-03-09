const UserModel = require('../models/UserTask')
LoginController = {}

LoginController.getLogin = async({username, password}) => {
    try {
        const User = await UserModel.findOne({username})
        if (!User) {
            throw new Error('Invalid Username')
        }
        if (!await User.validatePassword(password)) {
            throw new Error('Invalid Password')
        }

        return User

    } catch (e) {
        throw e
    }
}

module.exports = LoginController