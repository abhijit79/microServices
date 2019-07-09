const express = require('express')
const router = express.Router()
const apiAdapter = require('./apiAdapter')

const config = require('../config')['services']['authService']

const BASE_URL =  'http://' + config['host'] + ':' + config['port']
const api = apiAdapter(BASE_URL)

router.get('/api/v1', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

router.post('/api/v1/register', (req, res) => {
    api.post(req.path).then(resp => {
        res.send(resp.data)
    })
})

module.exports = router