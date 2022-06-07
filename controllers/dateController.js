const dates = require('../models/dates')
///
//Functions
const indexDate = (req, res)=>{
    dates.find({}, (error, date)=>{
        res.json(date)
    })
}


// const newDate = 

// const createDate =

// const showDate= 

// const editDate = 

// const updateDate = 

// const deleteDate = 

///
module.exports = {
    indexDate,
    // newDate,
    // createDate,
    // showDate,
    // editDate,
    // updateDate,
    // deleteDate
}