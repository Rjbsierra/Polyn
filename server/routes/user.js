const express = require('express')
const router = express.Router()
const user = require('../controller/user')


router.route('/getuser').get(user.getuser)

module.exports = router
