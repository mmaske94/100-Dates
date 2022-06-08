const mongoose = require('mongoose')
const dateSchema = new mongoose.Schema({
    nameOfDate: String,
    when: String,
    where: String,
    who: String,
    description: String,
})
const Activity = mongoose.model("Activity", dateSchema)
module.exports= Activity