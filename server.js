// express setup
const express = require('express')
const path = require('path')
const app = express()

let PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(PORT, () => console.log('Listening on port ' + PORT))


// routes
const htmlRoutes = require('./app/routing/htmlRoutes.js')
app.use('/', htmlRoutes)

const apiRoutes = require('./app/routing/apiRoutes.js')
app.use('/', apiRoutes)