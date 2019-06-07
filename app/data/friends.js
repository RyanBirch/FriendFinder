const fs = require('fs')

let friends = []

fs.readFile('app/data/friends.json', 'utf8', (err, data) => {
    if (err) throw err

    console.log(data)
    let parse = JSON.parse(data)
    console.log('loop: ')
    for (let i = 0; i < parse.length; i++)  {
        console.log(parse[i])
        friends.push(parse[i])
    }

    console.log('friends: ')
    console.log(friends[0])
})

module.exports = friends