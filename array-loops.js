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



/* 
#####################################################
FIND KATAS
#####################################################
*/

// Find Refactoring
// You are provided with a function that takes an array of objects (representing people) and a name (string).
// The function returns the first person object whose name matches the provided name.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the find() method instead.

// function findPerson(people, name) {
//     for (let i = 0; i < people.length; i++) {
//         if (people[i].name === name) {
//             return people[i]
//         }
//     }
// }

function findPerson1(people, name) {
    let result = people.find(person => person.name === name)
    return result
}

// Simplify function

const findPerson = (people, name) => people.find(person => person.name === name)

// Test

console.log(findPerson([{'name':'Alice','age':25},{'name':'Alice','age':30}],'Alice')) // {'name':'Alice','age':25}
console.log(findPerson([{'name':'Alice','age':25},{'name':'Bob','age':37}],'Alice')) // {'name':'Alice','age':25}
console.log(findPerson([{'name':'Bob','age':37},{'name':'Alice','age':25}],'Alice')) // {'name':'Alice','age':25}


// Find Product By Id

// Write a JavaScript function named findProductById.
// This function will take an array of product objects and a specific product ID.
// It should use the find() method to search through the array and return the product object that has the matching ID.
// If no product with the given ID is found, the function should return null.

function findProductById1(products, id) {
    let product = products.find(p => p.id === id)
    return !product ? null : product
}

// Simplify function.
// Note: after trying for a while, I used ChatGPT to simplify it so I could understand the process. Here is the conversation for reference: https://chat.openai.com/share/49969ee2-1ceb-4442-a4aa-de7aabb8b7bd

const findProductById = (products, id) => products.find(p => p.id === id) || null;



console.log(findProductById([{'id':1,'name':'Smartphone'},{'id':2,'name':'Laptop'},{'id':3,'name':'Tablet'}],2)) // {'id':2,'name':'Laptop'}
console.log(findProductById([{'id':109,'name':'Keyboard'},{'id':107,'name':'Duck'}],109)) // {'id':109,'name':'Keyboard'}
console.log(findProductById([{'id':109,'name':'Keyboard'},{'id':107,'name':'Duck'}],20)) // null



// Find User Bug

// You are given a function that attempts to find and return a user object from an array of users by a given username.
// However, the find() method is being used incorrectly in this function.
// Your task is to identify the mistake and correct the function so that it properly uses find().

function findUserByUsername1(users, username) {
    let user = users.find(user => user.username === username)
    return user
}

// Simplified function

const findUserByUsername = (users, username) => users.find(user => user.username === username)

// Tests

console.log(findUserByUsername([{'username':'spiderman','password':'web'},{'username':'batman','password':'dark'}],'batman')) // {'username':'batman','password':'dark'}
console.log(findUserByUsername([{'username':'wonderwoman','password':'amazon'},{'username':'superman','password':'krypto'}],'wonderwoman')) // {'username':'wonderwoman','password':'amazon'}



// Replace Product Price

// Write a JavaScript function named replaceProductPrice.
// This function should take two parameters: an array of product objects and a product ID.
// Each product object contains an id, a name, and a price.
// The function should find the product with the given ID and increase its price by 10%.
// The function should return a new array with the updated product objects.


function replaceProductPrice(products, id) {
    let newPriceProducts = products.map(prod => { 
        if (prod.id === id) {
            prod.price = Math.floor(prod.price * 1.1)
            return prod
        } else {
            return prod
        }
    })
    return newPriceProducts
}

// Note: Objects are references in JS, so when assigning to a new variable, we are passing through the reference to the location, which means we will modify the object if we perform operations on that variable.
// Longer explanation by ChatGPT: https://chat.openai.com/share/9f3014d1-23d7-4f1d-986b-36064bad5b64


function replaceProductPrice1(products, id) {
    let productToUpdate = products.find(prod => prod.id === id) // in here productToUpdate is getting the address of the object

    if (productToUpdate) {
        productToUpdate.price = Math.floor(productToUpdate.price * 1.1) // because of that, here we are performing the change ON the object, which then modifies the original array as well
    }
    return products;
}


console.log(replaceProductPrice([{'id':1,'price':100},{'id':2,'price':200}],1)) // [{'id':1,'price':110},{'id':2,'price':200}]
console.log(replaceProductPrice([{'id':1,'price':100},{'id':2,'price':200}],2)) // [{'id':1,'price':100},{'id':2,'price':220}]