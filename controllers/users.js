const UserModel = require('../models/UserTask');
UserController = {}

UserController.createUser = async ({firstName, lastName, username, email, password}) => {
    try {
        const User = new UserModel({
            firstName,
            lastName,
            username,
            email,
            password
        })

        return await User.save();
    } catch (e) {
        throw e
    }
}

module.exports = UserController