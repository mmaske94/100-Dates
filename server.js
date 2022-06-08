const express = require('express');
const app = express();
const dateRoutes = require('./routes/dateRoutes')
const path = require('path')
const PORT = 4000;
require('./database/connection')
///
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
///
//Routes Start Here
app.use("/dates", dateRoutes)
//Routes End Here
app.listen(PORT,(req,res)=>{
    console.log("app is listneing")
})