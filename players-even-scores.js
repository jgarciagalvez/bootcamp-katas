// Player Names with Even Scores

// Your task is to create a function named getEvenScorePlayers.
// This function should take an array of objects as its parameter.
// Each object represents a player with two properties: name (a string) 
// and score (a number or a string).
// The function should select the players whose scores are even numbers 
// (and specifically not strings), concatenate their names into a single string 
// with spaces, and return this string.

function getEvenScorePlayers(players) {
    let listPlayers = ''
    for (let player of players) {
        if (typeof player.score != 'string' && player.score % 2 === 0) {
            listPlayers = listPlayers + player.name + ' '
        }
    }
    return listPlayers
}


let players1 = [
    {"name": "Alice", "score": 20}, 
    {"name": "Bob", "score": 15}, 
    {"name": "Charlie", "score": 30}, 
    {"name": "Daisy", "score": "40"}
]


// console.log(getEvenScorePlayers(players1))

// getEvenScorePlayers(players1) // 'Alice Charlie'

// let players2 = [{"name": "Tom", "score": "8"}, {"name": "Tim", "score": 9}, {"name": "Tam", "score": 2}]
// getEvenScorePlayers(players2) // 'Tam'
