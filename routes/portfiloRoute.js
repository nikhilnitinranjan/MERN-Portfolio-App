const express = require('express')
const { sendEmailController } = require('../controllers/portflioController')

//routes object
const router = express.Router()

//
router.post('/sendEmail',sendEmailController)
//export
module.exports = router