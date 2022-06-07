const express = require('express');
const app = express();
const dateRoutes = require('./routes/dateRoutes')
const PORT = 4000;
require('./database/connection')
///
app.use(express.json())
app.use(express.urlencoded({extended: true}))
///
//Routes Start Here
app.use("/dates", dateRoutes)
//Routes End Here
app.listen(PORT,(req,res)=>{
    console.log("app is listneing")
})