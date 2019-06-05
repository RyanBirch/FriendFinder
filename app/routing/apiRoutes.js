const express = require('express')
const path = require('path')
const router = express.Router()

const friends = require('../data/friends.js')

router.get('/api/friends', (req, res) => {
    res.json(friends)
})

router.post('/api/friends', (req, res) => {
    let friend = req.body
    console.log('name: ')
    console.log(friend.name)
})

module.exports = router