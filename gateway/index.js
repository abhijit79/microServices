
const express = require('express')
const addRequestId = require('express-request-id')()
const logger = require('morgan')

const router = require('./routers/router')
const bodyParser = require('body-parser')

const envirnoment = process.env.NODE_ENV
const stage = require('./config')[envirnoment]

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(addRequestId)


if(envirnoment !== 'production'){
    app.use(logger('dev'))
}

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})

app.use(router)

app.listen(`${stage.port}`, () => {
    console.log(`Server now listening at localhost:${stage.port}`)
})