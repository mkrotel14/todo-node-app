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

        const newUser = await User.save();
        console.log(newUser)
        return newUser
    } catch (e) {
        throw e
    }
}

module.exports = UserController