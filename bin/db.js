const mongoose = require('mongoose')

function connect() {
    return mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false,
        useFindAndModify: false, 
    })
    .then(() => console.log('Connected'))
    .catch(err => console.log('Connection Error'))
}

module.exports = {connect}
