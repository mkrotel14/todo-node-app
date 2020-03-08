const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const {Schema} = mongoose
const {isEmail} = require('validator')

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true    
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [isEmail, 'Email Inválido']
    },
    password:{
        type: String,
        required: true,
    },
    todo: [{
        type: Schema.Types.ObjectId,
        ref: 'Todo'
    }],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: Date
})

UserSchema.pre('save', async function save(next) {
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt)
        return next()
    } catch (e) {
        throw e
    }
})

UserSchema.methods.validatePassword = async function validatePassword(password){
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', UserSchema)