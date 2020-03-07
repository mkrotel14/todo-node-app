const express = require("express");
const Router = express.Router();
const UserController = require('../controllers/users')


// Router.post("/get", async (req, res) => {
//   try {
//     res.send(await UserController.getUser())
//   } catch (e) {
//     throw e
//   }
// })

Router.post("/new", async (req, res) => {
  try {
    res.json(await UserController.createUser(req.body))
  } catch (e) {
    res.status(500).json(e.message)
  }
})

Router.put("/", async (req, res) => {
  try {
    res.send(await UserController.updateUser(req.body))
  } catch (e) {
    throw e
  }
})

Router.delete("/", async (req,res) => {
  try {
    res.send(await UserController.deleteUser(req.body))
  } catch (e) {
    throw e
  }
})

module.exports = Router;
