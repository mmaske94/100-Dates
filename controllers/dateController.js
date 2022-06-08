const Activity = require('../models/dates')
///
//Functions

const indexDate = (req, res)=>{

    Activity.find({}, (error, activities)=>{
        // res.json(activities)
        
        res.render("index.ejs", {activities})
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