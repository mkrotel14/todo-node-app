const { Types, isValidObjectId } = require("mongoose");
const TodoModel = require("../models/TodoTask");
const UserModel = require("../models/UserTask");
const TodoController = {};

TodoController.createTodo = async ({ content, user_id, todoAt }) => {
  try {
    if (!isValidObjectId(user_id)) {
      throw new Error("Invalid user_id");
    }

    const Todo = new TodoModel({ content, user: user_id, todoAt });
    const User = await UserModel.findById(user_id);
    User.todo.push(Todo);

    await User.save();
    return Todo.save();
  } catch (e) {
    throw e;
  }
};

TodoController.getTodoByUserId = async ({ user_id, finished }) => {
  try {
    if (isValidObjectId(user_id)) {
      if (finished === undefined) {
        return await TodoModel.find({ user: user_id });
      } else {
        return await TodoModel.find({
          $and: [{ user: user_id }, { finished }]
        });
      }
    }

    throw new Error("Invalid User Id");
  } catch (e) {
    throw e;
  }
};

TodoController.updateTodo = async ({ todo_id, content, finished, todoAt }) => {
  try {
    if (!isValidObjectId(todo_id)) {
      throw new Error("Invalid Todo Id");
    }

    const Todo = await TodoModel.findOne({ _id: todo_id });

    content ? (Todo.content = content) : null;
    finished ? (Todo.finished = finished) : null;
    todoAt ? (Todo.todoAt = todoAt) : null;

    if (Todo.todoAt && Todo.todoAt < new Date()) {
      throw new Error(
        "The task due date must be no greater than or equal to the current date"
      );
    }

    if (finished && Todo.todoAt > new Date()) {
      throw new Error("The task can only be completed on the deadline");
    }

    return await Todo.update();
  } catch (e) {
    throw e;
  }
};

TodoController.deleteTodo = async ({ todo_id }) => {
  try {
    return await TodoModel.deleteOne({ _id: todo_id });
  } catch (e) {
    throw e;
  }
};

module.exports = TodoController;
