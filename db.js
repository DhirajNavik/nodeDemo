const mongoose = require('mongoose');
require("dotenv").config();

// const mongoURL =  process.env.LOCAL_URL 

const mongoURL = process.env.MONGODB_URL;

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