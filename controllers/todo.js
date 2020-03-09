const {Types, isValidObjectId} = require('mongoose')
const TodoModel = require('../models/TodoTask');
const UserModel = require('../models/UserTask')
TodoController = {}

TodoController.createTodo = async ({content, user_id}) => {
    try {
        const Todo = new TodoModel({
            content,
            user: user_id
        })

        await Todo.save()

        const User = await UserModel.findById(user_id)
        User.todo.push(Todo)
        return await User.save()
    } catch (e) {
        throw e
    }
}

TodoController.getTodoByUserId = async ({user_id}) => {
    try {
        if(isValidObjectId(user_id)) {
            return await TodoModel.find({user: user_id})
        }

        throw new Error('Invalid User Id')
    } catch (e) {
        throw e
    }
}

// TodoController.updateTodo = async ({todo_id, content, finished})

module.exports = TodoController