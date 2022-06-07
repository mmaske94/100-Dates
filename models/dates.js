const mongoose = require('mongoose')
const dateSchema = new mongoose.Schema({
    nameOfDate: String,
    when: String,
    where: String,
    who: String,
    description: String,
})
const Date = mongoose.model("Date", dateSchema)
module.exports= Date