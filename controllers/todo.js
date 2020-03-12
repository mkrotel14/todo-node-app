const { Types, isValidObjectId } = require('mongoose')
const TodoModel = require('../models/TodoTask');
const UserModel = require('../models/UserTask')
const Joi = require('@hapi/joi');
const dayjs = require("dayjs");
TodoController = {}

TodoController.createTodo = async ({ content, user_id, todoAt }) => {

    if (!isValidObjectId(user_id)) {
        throw new Error('Invalid User Id');
    }

    const schemaTodo = Joi.object({
        content: Joi.string().trim().min(1).max(40).required(),
        user: Joi.string().trim().required(),
        todoAt: Joi.date().min(
            dayjs().hour(0).minute(0).second(0).format("YYYY-MM-DD")
        )
    });

    const todo = {
        content,
        user: user_id,
        todoAt
    }

    const { value, error } = schemaTodo.validate(todo);
    if (error) {
        throw { message: error.details };
    }

    try {
        const Todo = new TodoModel(value);
        return await Todo.save();
        // const User = await UserModel.findById(user_id)
        // User.todo.push(Todo)
        // return await User.save()
    } catch (e) {
        throw e
    }
}

TodoController.getTodoByUserId = async ({ user_id }) => {
    try {
        if (isValidObjectId(user_id)) {
            return await TodoModel.find({ user: user_id })
        }

        throw new Error('Invalid User Id')
    } catch (e) {
        throw e
    }
}

TodoController.updateTodo = async ({ todo_id, content, finished, todoAt }) => {
    try {
        if (!isValidObjectId(todo_id)) {
            throw new Error('Invalid Todo Id');
        }

        const todo = await TodoModel.findOne({ _id: todo_id })

        content ? todo.content = content : null;
        finished ? todo.finished = finished : null;
        todoAt ? todo.todoAt = todoAt : null;

        if (todo.todoAt && todo.todoAt < new Date()) {
            throw new Error('The task date must be no greater than or equal to the current date');
        }

        if (finished && todo.todoAt > new Date()) {
            throw new Error('The task can only be completed on the deadline');
        }

        return await todo.save();
    } catch (e) {
        throw e
    }
}

module.exports = TodoController