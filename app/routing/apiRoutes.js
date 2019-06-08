const fs = require('fs')

module.exports = (app) => {

    const { friends, findFriend } = require('../data/friends.js')

    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })
    
    app.post('/api/friends', (req, res) => {
        // create new friend object with user input from the form
        let friend = req.body
        console.log(friend)

        // res.send('hello')

        // convert scores to numbers
        friend.scores = friend.scores.map( item => parseInt(item))
        console.log('friend after parse: ')
        console.log(friend)

       // add new friend object to json file
       fs.readFile('app/data/friends.json', 'utf8', (err, data) => {
           if (err) throw err 

           let json = JSON.parse(data)
           json.push(friend)

           fs.writeFile('app/data/friends.json', JSON.stringify(json, null, 2), (err) => {
               if (err) throw err
           })
       })

       // find best match
       // res.send('sending...')
       let theFriend
       findFriend(friend).then(data => {
           theFriend = data.name
           res.send('the friend: ' + theFriend)
       })
    })
}