require('./connection')
const Activity = require('../models/dates')
const dateSeeds= require('./seeds.json')

Activity.deleteMany({})
.then(()=>{
    return Activity.insertMany(dateSeeds)
})
.then((dates)=>{
    console.log(dates)
})
.catch(console.error)
.finally(()=>{
    process.exit()
})