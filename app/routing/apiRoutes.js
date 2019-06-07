const fs = require('fs')

module.exports = (app) => {

    const friends = require('../data/friends.js')

    app.get('/api/friends', (req, res) => {
        res.json(friends)
        // console.log(friends)
    })
    
    app.post('/api/friends', (req, res) => {
       let form = req.body
       let friend = {
           name: form.name,
           photo: form.photo,
           scores: [
               parseFloat(form.q1),
               parseFloat(form.q2),
               parseFloat(form.q3),
               parseFloat(form.q4),
               parseFloat(form.q5),
               parseFloat(form.q6),
               parseFloat(form.q7),
               parseFloat(form.q8),
               parseFloat(form.q9),
               parseFloat(form.q10),
           ]
       }

       friends.push(friend)

       // work on saving data to json file for data persistence
       fs.readFile('app/data/friends.json', 'utf8', (err, data) => {
           if (err) throw err 

           let json = JSON.parse(data)
           json.push(friend)

           fs.writeFile('app/data/friends.json', JSON.stringify(json, null, 2), (err) => {
               if (err) throw err
           })
       })

    })
}