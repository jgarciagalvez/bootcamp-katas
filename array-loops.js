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

// Refactoring Filter
// You are given a function that takes an array of numbers and returns a new array containing only even numbers.
// Your task is to refactor this function to use the filter() method instead.

// function getEvenNumbers(numbers) {
//     const evenNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         }
//     }
//     return evenNumbers;
// }
// function getEvenNumbers(numbers) {
//     const evenNumbers = numbers.filter(n => n % 2 === 0)
//     return evenNumbers
// }

const getEvenNumbers = numbers => numbers.filter(n => n % 2 === 0)

// Tests

console.log(getEvenNumbers([1,2,3,4,5,6])) // [2,4,6]
console.log(getEvenNumbers([0,-10,11,-12,13])) // [0,-10,-12]
console.log(getEvenNumbers([])) // []



// Filter Negatives

// Write a JavaScript function named filterOutNegativeNumbers.
// This function should take an array of numbers and return a new array with all negative numbers filtered out, leaving only positive numbers and zeros.

function filterOutNegativeNumbers1(numbers) {
    let negativeNumbers = numbers.filter(n => n >= 0)
    return negativeNumbers
}

const filterOutNegativeNumbers = numbers => numbers.filter(n => n >= 0)

console.log(filterOutNegativeNumbers([1,2,3])) // [1,2,3]
console.log(filterOutNegativeNumbers([1,-2,-3,4])) // [1,4]
console.log(filterOutNegativeNumbers([-10,-20,-30,-40])) // []


// Long Strings Bug

// You are given a function that is intended to return an array of strings that are longer than 4 characters.
// However, there's a mistake in the implementation of the filter() method.
// Your task is to identify and correct the error in the function.

// function getLongStrings(strings) {
//     return strings.filter(string => {
//         if (string.length > 4)
//     })
// }

function getLongStrings1(strings) {
    return strings.filter(string =>
        string.length > 4
    )
}

const getLongStrings = strings => strings.filter(str => str.length > 4)

console.log(getLongStrings(['Hello','Hola','Ciao'])) // ['Hello']
console.log(getLongStrings(['Grazie','Merci','Tak'])) // ['Grazie','Merci']
console.log(getLongStrings(['Grazie','Merci','Tak','Kop Khun'])) // ['Grazie','Merci','Kop Khun']



// Filter and Square Evens

// Create a JavaScript function named filterAndSquareEvens. This function should take an array of numbers as its input. It should first filter out all odd numbers, and then square each of the remaining even numbers. The function should return a new array with these squared even numbers.

const filterAndSquareEvens1 = numbers => {
    let evenNumbers = numbers.filter(n => n % 2 === 0)
    let sqrEvenN= evenNumbers.map(n => n * n)
    return sqrEvenN
}

// Simplified function

const filterAndSquareEvens = numbers => numbers.filter(n => n % 2 === 0).map(n => n * n)

// Tests

console.log(filterAndSquareEvens([1,2,3,4,5,6])) // [4,16,36]
console.log(filterAndSquareEvens([10,-10,20,-20])) // [100,100,400,400]
console.log(filterAndSquareEvens([0,11,22,0])) // [0,484,0]


