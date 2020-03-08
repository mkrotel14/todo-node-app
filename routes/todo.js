const express = require("express");
const Router = express.Router();
const TodoController = require('../controllers/todo')

Router.get("/", async (req, res) => {
  try {
    res.json(await TodoController.getTodoByUserId(req.query))
  } catch (e) {
    throw e
  }
})

Router.post("/new", async (req, res) => {
  try {
    res.json(await TodoController.createTodo(req.body))
  } catch (e) {
    res.status(500).json(e.message)
  }
})

Router.put("/edit", async (req, res) => {
  try {
    res.send(await TodoController.updateTodo(req.body))
  } catch (e) {
    res.status(500).json(e.message)
  }
})

Router.delete("/delete", async (req,res) => {
  try {
    res.send(await TodoController.deleteTodo(req.body))
  } catch (e) {
    res.status(500).json(e.message)
  }
})

module.exports = Router;
