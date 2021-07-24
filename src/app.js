const express = require('express')
const userRouter = require('./routes/users')
const taskRouter = require('./routes/tasks')
require('./db/mongoose')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app