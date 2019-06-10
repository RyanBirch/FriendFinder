module.exports = (app) => {

    const { friends, findFriend } = require('../data/friends.js')

    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })
    
    app.post('/api/friends', (req, res) => {
        // create new friend object with user input from the form
        let friend = req.body

        // convert scores to numbers
        friend.scores = friend.scores.map( item => parseInt(item))

       // find best match and send back to the user
       findFriend(friend).then(data => {
           res.send(data)
       })
    })
}