const UserModel = require('../models/UserTask');
const Joi = require('@hapi/joi');
UserController = {}

UserController.createUser = async ({ firstName, lastName, username, email, password }) => {
    try {
        const schemaUser = Joi.object({
            firstName: Joi.string().trim().min(5).max(20),
            lastName: Joi.string().trim().min(5).max(20),
            username: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            email: Joi.string()
                .email({}),
            password: Joi.string().min(6)
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        });

        const user = {
            firstName,
            lastName,
            username,
            email,
            password
        }

        const { value, error } = schemaUser.validate(user);
        if (error) {
            throw {message: error.details};
        }
        const User = new UserModel(value);
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

UserController.getUsers = async () => {
    try {
        return await UserModel.find();
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