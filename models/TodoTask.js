const mongoose = require('mongoose')
const {Schema} = mongoose

const TodoSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',        
    },
    content: {
        type: String,
        required: true
    },
    finished: {
        type: Boolean,
        required: true,
        default: 0
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: Date
})

module.exports = mongoose.model('Todo', TodoSchema)