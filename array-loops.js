/*
################################################
MAP KATAS
################################################
*/

// Refactoring Map

// You are provided with a function that takes an array of numbers and returns a new array with each number doubled.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the map() method instead.

// function doubleNumbers(arr) {
//     const doubled = arr.map(e => e * 2)
//     return doubled;
// }

const doubleNumbers = arr => arr.map(e => e * 2)

// Tests

console.log(doubleNumbers([1,2,3,4])) // [2,4,6,8]
console.log(doubleNumbers([10,10,10])) // [20,20,20]
console.log(doubleNumbers([0,100])) // [0,200]
console.log(doubleNumbers([])) // []


// To Fahrenheit

// Create a JavaScript function named convertToFahrenheit.
// This function will take an array of temperatures in Celsius and return a new array with these temperatures converted to Fahrenheit.
// The conversion formula to use is Fahrenheit = Celsius * 9 / 5 + 32.

// function convertToFahrenheit(arr) {
//     let f = arr.map(c => c * 9 / 5 + 32)
//     return f
// }

const convertToFahrenheit = arr => arr.map(temp => temp * 9 / 5 + 32)

// Tests

console.log(convertToFahrenheit([15,40,12,5])) // [59,104,53.6,41]
console.log(convertToFahrenheit([42,0,-10])) // [107.6,32,14]


// Square Numbers Bug

// You are provided with a function that is intended to take an array of numbers and return a new array with each number squared.
// However, there's an error in how the map() method is currently being used.
// Your task is to identify the error and correct the code.

// function squareNumbers(numbers) {
//     numbers.map(number => {
//         return number * number
//     })
// }

// function squareNumbers(numbers) {
//     let sqr = numbers.map(number => {
//         return number * number
//     })
//     return sqr
// }

const squareNumbers = numbers => numbers.map(number => number * number)

// Tests

console.log(squareNumbers([1,2,3,4])) // [1,4,9,16]
console.log(squareNumbers([9,0])) // [81,0]

/*
################################################
FILTER KATAS
################################################
*/

