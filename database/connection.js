const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/calvin', {
    useNewUrlParser: true
})

const database = mongoose.connection

database.on('connected', ()=>{
    console.log(`Connected to Mongo at ${database.host}:${database.port}`)
})