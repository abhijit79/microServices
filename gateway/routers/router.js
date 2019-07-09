const express = require('express')
const testService = require('./testService')
const authService = require('./authService')

const router = express.Router()

router.use((req, res, next) =>{
    console.log("Called: ", req.path)
    next()
})


router.use(authService)
router.use(testService)

module.exports = router