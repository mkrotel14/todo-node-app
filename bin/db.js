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

// async function connect(db_connect) {
//     console.log(db_connect)

//     const connected = await mongoose.connect(db_connect, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         bufferCommands: false,
//         useFindAndModify: false, 
//     })
//     console.log(connected)
//     let con = mongoose.connection;
    
//     con.on('error', () => console.log('Connection Error'))
//     con.on('open', () => console.log('Connected to db'))

//     mongoose.connection.on('disconnected', () => console.log('Mongoose default connection is disconected'))

//     process.on('SIGINT', () => {
//         mongoose.connection.close(() => {
//             console.log("Mongoose default connection is disconnected due to application termination");
//             process.exit(0)
//         })
//     })

//     return connected
// }

// async function disconnect() {
//     await mongoose.disconnect()
// }

module.exports = {connect}
