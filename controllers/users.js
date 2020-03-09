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

UserController.updateUser = async ({user_id, firstName, lastName, password}) => {
    try {
        const User = await UserModel.findById({_id: user_id})

        firstName ? User.firstName = firstName : null
        lastName ? User.lastName = lastName : null
        password ? User.password = password : null

        User.updatedAt = new Date()

        return await User.save()
    } catch (e) {
        throw e
    }
}

UserController.deleteUser = async ({user_id}) => {
    try {
        return await UserModel.deleteOne({_id: user_id})
    } catch (e) {
        throw e
    }
}

UserController.getUserByUserId = async ({user_id}) => {
    try {
        return await UserModel.findById({_id: user_id})
    } catch (e) {
        throw e
    }
}

module.exports = UserController