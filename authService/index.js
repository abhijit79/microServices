
require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const users = require('./controller/user')

const app = express()
const router = express.Router()

const environment = process.env.NODE_ENV
const stage = require('./config')[environment]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

if (environment !== 'production') {
    app.use(logger('dev'));
}
  
app.get('/api/v1', (req, res, next) => {
    res.send('Welcome to api')
    next()
})

app.post('/api/v1/register', users.add)

app.listen(`${stage.port}`, () => {
    console.log(`Server now listening at localhost:${stage.port}`);
})