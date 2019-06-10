let friends = [
    {
        "name": "Bob Ross",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png",
        "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        "name": "Jackie Moon",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png",
        "scores": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    },
    {
        "name": "Ricky Bobby",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png",
        "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    }
]

// match user with friend
function findFriend(user) {
    return new Promise((resolve, reject) => {

        // initial value to check against
        let diffSum = 100
        let currentSum = 0
        let currentFriend

        // loop through other users and compare their scores to current user
        for (let i = 0; i < friends.length; i++) {

            for (let j = 0; j < friends[i].scores.length; j++) {
                currentSum += Math.abs(friends[i].scores[j] - user.scores[j])
            }

            if (currentSum < diffSum) {
                diffSum = currentSum 
                currentFriend = friends[i]
            }

            currentSum = 0
        }

        resolve(currentFriend)
    })
}


module.exports = {
    friends,
    findFriend
}