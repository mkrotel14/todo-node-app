const express = require('express')
const Router = express.Router()
const LoginController = require('../controllers/login')

Router.post('/', async (req, res) => {
    try {
        res.send(await LoginController.getLogin(req.body))
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
})

module.exports = Router