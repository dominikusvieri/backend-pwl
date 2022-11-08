const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const port = 3200

const userEndpoint = require('./routes/users')

// standar express file project
const app = express()
app.use(cors()) // untuke kebutuhan cors library
app.use(express.json()) // untuk handle request kek dia bakal nerima reqnya sebagai apa

app.use('/', userEndpoint)

app.listen(port, () => console.log( `running server on port ${port}`)) // ada