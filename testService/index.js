const express = require('express')
const bodyParser = require('body-parser')
const addRequestId = require('express-request-id')()
const config = require('./config')

environment = process.env.NODE_ENV
stage = config[environment]

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(addRequestId)

app.get('/api/v1/test', (req, res) => {
    res.send('Welcome to test Service')
})

app.listen(`${stage.port}`, () => {
    console.log(`Server now listening at localhost:${stage.port}`);
})