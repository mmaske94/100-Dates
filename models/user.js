const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String,
    pronouns: String,
    email: String,
    partner: String,
    anniversary: String,
  
})
const User = mongoose.model("User", userSchema)
module.exports= User