// express setup
const express = require('express')
const app = express()

let PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('app/public/assets'))

app.listen(PORT, () => console.log('Listening on port ' + PORT))


// routes
require('./app/routing/htmlRoutes.js')(app)
require('./app/routing/apiRoutes.js')(app)