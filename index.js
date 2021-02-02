const Joi = require('joi')
const express = require('express')
require('./middleware/mongoose')
const course = require('./routes/course')
const home = require('./routes/home')
const app = express()
const log = require('./middleware/logger')



app.use(express.json())

app.use('/courses',course)
app.use('/',home)
// log.log()
// log()

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`listening on PORT ${port}....`)
})