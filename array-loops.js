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

/* 
#####################################################
SOME KATAS
#####################################################
*/


// Contains High Value

// Create a function called containsHighValue.
// This function will take an array of numbers and check if the array contains any number greater than a specified value.
// The function should use the some() method to perform this check and return true if such a number exists, or false otherwise.

const containsHighValue = (numbers, n) => numbers.some(number => number > n)

// Tests

console.log(containsHighValue([1,2,3,4,5],4)) // TRUE
console.log(containsHighValue([10,100,1000],55)) // TRUE
console.log(containsHighValue([10,100,1000],2000)) // FALSE
console.log(containsHighValue([1,2,3],10)) // FALSE



// Check And Transform

// Create a JavaScript function named checkAndTransform.
// This function will take two parameters: an array of numbers and a threshold value.
// First, it should check if any number in the array is greater than the threshold.
// If such a number exists, then use the map() method to double each number in the array.
// The function should return the transformed array if there's a number greater than the threshold, or the original array otherwise.

const checkAndTransform = (numbers, n) => {
    if (numbers.some(number => number > n)) {
        return numbers.map(number => number * 2) 
    } 
    return numbers
}

console.log(checkAndTransform([1,4,6,8],5)) // [2,8,12,16]
console.log(checkAndTransform([2,3,4],10)) // [2,3,4]


// All Pass

// Create a JavaScript function named allPass.
// This function will take two parameters: an array of students scores and a numerical threshold.
// It should check whether all numbers in the array are greater than the given threshold (all students have passed the exam).
// The function should return true if all numbers meet this criterion, or false otherwise.

const allPass = (scores, n) => scores.every(score => score > n)

console.log(allPass([7,8,8,6,10],5)) // TRUE
console.log(allPass([7,8,8,2],5)) // FALSE
console.log(allPass([10,7,8,10,10,9],5)) // TRUE


// Search Houses

// Create a JavaScript function called searchHouses.
// This function should take 3 parameters: an array of houses (objects, each having an id, a price and a location), a number (price) and a string (location).
// It should return true of all the houses contain the location string in the name of their location and if they all below the price; otherwise return false.

function searchHouses2(houses, price, location) {
    let allLocation = houses.every(house => house.location.includes(location)); 
    let allPrice = houses.every(house => house.price < price);
    return !allLocation || !allPrice ? false : true
}

// Simplified function (not sure if it would be good or too complex for a one liner)

const searchHouses = (houses, price, location) => 
    houses.every(house => 
        house.location.includes(location) && house.price < price);


// Tests

console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Koh')) // TRUE
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Bali')) // FALSE
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],90,'Koh')) // FALSE
console.log(searchHouses([{'price':100,'location':'Bali'},{'price':80,'location':'Koh Samui'}],90,'Bali')) // FALSE


// Refactoring Reduce
// You are provided with a function that takes an array of numbers and calculates the sum of all the numbers.
// Currently, the function uses a for loop to accomplish this.
// Your task is to refactor this function to use the reduce() method instead, to make the code more concise and functional.

// function sumNumbers(numbers) {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]
//     }
//     return sum
// }

function sumNumbers1(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}

const sumNumbers = (numbers) => numbers.reduce((acc, number) => acc + number)

console.log(sumNumbers([1,2,3,4,5])) // 15
console.log(sumNumbers([10,10])) // 20
console.log(sumNumbers([-5,-3,8])) // 0



// Sum of Even Numbers

// Create a JavaScript function named sumOfEvenNumbers.
// This function will take an array of numbers as its input.
// It should first use the filter() method to keep only the even numbers from the array.
// Then, use the reduce() method to calculate and return the sum of these even numbers.

const sumOfEvenNumbers = numbers => numbers.filter(n => n % 2 === 0).reduce((acc, n) => acc + n)

console.log(sumOfEvenNumbers([1,2,3,4,5,6])) // 12
console.log(sumOfEvenNumbers([20,1,20,1])) // 40


// Refactor Sort

// You are given a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// The current implementation sorts the array using a for loop.
// Your task is to refactor this function to use the sort() method instead, for a more efficient and idiomatic approach.

function sortNumbers1(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

const sortNumbers = numbers => numbers.sort((a, b) => a - b)


// Sort Names
// Create a sortNames function that takes an array of strings (names) and returns the array sorted alphabetically.

const sortNames = names => names.sort()


// Filter Best Books

// Create a function named filterAndSortBooks.
// This function will take two parameters: an array of book objects and a minimum rating value.
// Each book object contains a title, an author, and a rating. The function should first use the filter() method to keep only the books with a rating greater than or equal to the minimum rating value.
// Then, it should use the sort() method to sort these filtered books in descending order of their ratings.
// The function should return the sorted array of books.

const filterAndSortBooks = (books, minRating) => books.filter(book => book.rating >= minRating).sort((a,b) => b.rating - a.rating)

// Tests

console.log(filterAndSortBooks([{'title':'The Great Gatsby','author':'F. Scott Fitzgerald','rating':8.5},{'title':'1984','author':'George Orwell','rating':9},{'title':'To Kill a Mockingbird','author':'Harper Lee','rating':8.3}],8.4)) // [{'title':'1984','author':'George Orwell','rating':9},{'title':'The Great Gatsby','author':'F. Scott Fitzgerald','rating':8.5}]
console.log(filterAndSortBooks([{'title':'Atomic Habits','author':'James Clear','rating':9},{'title':'Mindset','author':'Carol Dwecks','rating':9},{'title':'Dare to Lead','author':'Brene Brown','rating':7.2}],7.3)) // [{'title':'Atomic Habits','author':'James Clear','rating':9},{'title':'Mindset','author':'Carol Dwecks','rating':9}]
