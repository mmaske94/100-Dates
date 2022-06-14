const express = require ('express')
const router = express.Router()
const dateCtrl = require('../controllers/dateController')

//Index Router
router.get('/', dateCtrl.indexDate)
// //New Route
router.get('/new', dateCtrl.newDate)
// //Create Route
router.post('/', dateCtrl.createDate)
// //Show Route
router.get('/:id', dateCtrl.showDate)
// //Edit Route
router.get('/:id/edit', dateCtrl.editDate)
// //Update Routes
router.put('/:id', dateCtrl.updateDate)
// //Delete Route
router.delete('/:id', dateCtrl.deleteDate)

module.exports=router