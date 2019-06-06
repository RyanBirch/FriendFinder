module.exports = (app) => {

    const friends = require('../data/friends.js')

    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })
    
    app.post('/api/friends', (req, res) => {
        let friend = req.body
        console.log('name: ')
        console.log(friend.name)
    })
}