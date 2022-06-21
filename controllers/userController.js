const User = require('../models/user')

const indexUser = (req, res)=>{

    User.find({}, (error, users)=>{
        if(error) {
            res.status(400).json(err)
            return
        }
        res.render("user.ejs", {users})
    })
}

const newUser = (req,res)=>{
    res.render('newUser.ejs');
 
 }
 
 const createUser = (req,res) =>{
 
     User.create(req.body, (error)=>{
         if(error) {
             res.status(400).json(err)
             return
         } 
         res.redirect('/users')
     })
 }

module.exports = {
    indexUser,
    newUser,
    createUser
    
}