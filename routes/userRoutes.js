const express = require ('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')

//Index Router
router.get('/', userCtrl.indexUser)
// //New Route
router.get('/login', userCtrl.newUser)
// //Create Route
router.post('/', userCtrl.createUser)

module.exports=router