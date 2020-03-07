const mongoose = require('mongoose')

const TodoTask = new mongoose.Schema({
    content: {
        trype: String,
        required: true
    },    
    createdAt: Date,
    updatedAt: Date
})

module.exports = mongoose.model('Todo', TodoSchema)