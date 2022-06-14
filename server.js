const express = require('express');
const app = express();
const path = require('path')
const dateRoutes = require('./routes/dateRoutes')
const userRoutes = require('./routes/userRoutes')
const PORT = 4000;
const methodOverride = require('method-override')
require('./database/connection')

//Uploading Images???
const multer = require ('multer');
const storage=multer.diskStorage({
    destination: (req, filename, cb) =>{
        cb(null, 'images')
    },
    filename: (req, file, cb)=>{
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

app.post('/dates/new', upload.single('image'), (req, res)=>{
    res.send('Image Uploaded')
})
//

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
///
app.use(methodOverride("_method"))
//Routes Start Here
app.use("/dates", dateRoutes)
app.use("/users", userRoutes)
//Routes End Here
app.listen(PORT,(req,res)=>{
    console.log("app is listneing")
})