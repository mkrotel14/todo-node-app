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

module.exports = TodoController