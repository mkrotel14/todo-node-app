const express = require("express");
const Router = express.Router();
const TodoControler = require('../controllers/todo')


Router.post("/new", async (req, res) => {
  try {
    res.json(await TodoControler.createTodo(req.body))
  } catch (e) {
    res.status(500).json(e.message)
  }
})

Router.put("/edit", async (req, res) => {
  try {
    res.send(await UserController.updateUser(req.body))
  } catch (e) {
    throw e
  }
})

Router.delete("/delete", async (req,res) => {
  try {
    res.send(await UserController.deleteUser(req.body))
  } catch (e) {
    throw e
  }
})

module.exports = Router;
