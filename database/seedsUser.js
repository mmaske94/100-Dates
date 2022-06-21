require('./connection')
const User = require('../models/user')
const userSeeds= require('./seedsUser.json')

User.deleteMany({})
.then(()=>{
    return User.insertMany(userSeeds)
})
.then((users)=>{
    console.log(users)
})
.catch(console.error)
.finally(()=>{
    process.exit()
})