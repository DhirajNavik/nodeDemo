const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{
    // useNewUrlParser:true,
    // useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Server Connected");
})
db.on('error',()=>{
    console.log("Server Error");
})
db.on('disconnected',()=>{
    console.log("Server disConnected");
})


module.exports = db;