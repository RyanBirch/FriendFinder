// express setup
const express = require('express')
const path = require('path')
const app = express()

let PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(PORT, () => console.log('Listening on port ' + PORT))



const htmlRoutes = require('./app/routing/htmlRoutes')
app.use('/', htmlRoutes)