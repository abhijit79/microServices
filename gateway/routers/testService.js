var express = require('express')
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const config = require('../config')['services']['testService']

const BASE_URL =  'http://' + config['host'] + ':' + config['port']
const api = apiAdapter(BASE_URL)

router.get('/api/v1/test', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

module.exports = router