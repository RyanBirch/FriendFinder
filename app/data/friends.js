const fs = require('fs')

let friends = []

// get data from json file and push it into friends array
fs.readFile('app/data/friends.json', 'utf8', (err, data) => {
    if (err) throw err

    let parse = JSON.parse(data)
    for (let i = 0; i < parse.length; i++)  {
        friends.push(parse[i])
    }
})


// match user with friend
function findFriend(user) {
    return new Promise((resolve, reject) => {
    
        let currentFriend

        // grab other users from json file
        fs.readFile('app/data/friends.json', 'utf8', (err, data) => {
            if (err) throw err

            // initial value to check against
            let diffSum = 100
            let currentSum = 0

            // loop through other users and compare their scores to current user
            let parse = JSON.parse(data)
            for (let i = 0; i < parse.length; i++) {

                for (let j = 0; j < parse[i].scores.length; j++) {
                    currentSum += Math.abs(parse[i].scores[j] - user.scores[j])
                }

                if (currentSum < diffSum) {
                    diffSum = currentSum 
                    currentFriend = parse[i]
                }

                currentSum = 0
            }

            resolve(currentFriend)
        })
    })
}


module.exports = {
    friends,
    findFriend
}