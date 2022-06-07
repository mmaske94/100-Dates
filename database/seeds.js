require('./connection')
const Date = require('../models/dates')
const dateSeeds= require('./seeds.json')

Date.deleteMany({})
.then(()=>{
    return Date.insertMany(dateSeeds)
})
.then((dates)=>{
    console.log(dates)
})
.catch(console.error)
.finally(()=>{
    process.exit()
})