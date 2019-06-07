const fs = require('fs')

let friends = []

fs.readFile('app/data/friends.json', 'utf8', (err, data) => {
    if (err) throw err

    let parse = JSON.parse(data)
    for (let i = 0; i < parse.length; i++)  {
        friends.push(parse[i])
    }
})

let person = {
    "name": "no one in particular",
    "photo": "no",
    "scores": [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
}

function findFriend(user) {

    // get score of current user
    let userSum = 0
    user.scores.forEach( item => {
        userSum += item
    })

    let currentFriend

    // grab other users from json file
    fs.readFile('app/data/friends.json', 'utf8', (err, data) => {
        if (err) throw err

        let friendSum = 0
        let diff = 100
    
        // loop through other users and find their scores
        let parse = JSON.parse(data)
        for (let i = 0; i < parse.length; i++)  {
            parse[i].scores.forEach( item => {
                friendSum += item
            })

            // compare user score to other users to find best match
            if (Math.abs(friendSum - userSum) < diff) {
                currentFriend = parse[i]
                diff = Math.abs(friendSum - userSum)
            }
        }

        console.log(currentFriend)
        return currentFriend
    })
}

findFriend(person)

module.exports = friends