const Activity = require('../models/dates')

//Functions

const indexDate = (req, res)=>{

    Activity.find({}, (error, activities)=>{
        if(error) {
            res.status(400).json(err)
            return
        }
        res.render("index.ejs", {activities})
    })
}

const newDate = (req,res)=>{
   res.render('new.ejs');

}

const createDate = (req,res) =>{

    Activity.create(req.body, (error)=>{
        if(error) {
            res.status(400).json(err)
            return
        } 
        res.redirect('/dates')
    })
}
const showDate = (req,res)=>{
    Activity.findById(req.params.id, (error, activity)=>{
        if(error) {
            res.status(400).json(err)
            return
        } 
        res.render('show.ejs', {activity})

    })
}

const editDate = (req,res) => {
    Activity.findById(req.params.id, (error, activity)=>{
        if(error) {
            res.status(400).json(err)
            return
        } 
        res.render('edit.ejs', {activity})

    })
  
}

const updateDate = (req,res)=>{
    Activity.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, activity)=>{
        if(error) {
            res.status(400).json(error)
            return
        }
        res.render('show.ejs', {activity})
        
    })
}

const deleteDate = (req,res)=>{
    Activity.findByIdAndDelete(req.params.id, (error, activity)=>{
        if(error) {
            res.status(400).json(error)
            return
        }
        res.redirect('/dates') 
    })
}

///
module.exports = {
    indexDate,
    newDate,
    createDate,
    showDate,
    editDate,
    updateDate,
    deleteDate
}