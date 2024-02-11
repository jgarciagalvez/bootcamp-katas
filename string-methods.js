// Return String Length

// Create a returnLength function that takes a parameter and returns its length if it's a string. In any other case it returns the type of the parameter.

const returnLength = str => {return typeof str === 'string' ? str.length : typeof str}

// Is Longer Than

// Create a JavaScript function called isLongerThan.
// This function should take two parameters: a string and a number.
// It should return true if the length of the string is greater than the given number, and false otherwise.

const isLongerThan = (str, n) => str.length > n ? true : false;

console.log(isLongerThan('hello',3)) // TRUE
console.log(isLongerThan('hello',5)) // FALSE
console.log(isLongerThan('',1)) // FALSE
console.log(isLongerThan('',0)) // FALSE


// String into Array

// Create a JavaScript function named splitStringIntoArray.
// This function should take two parameters: a string and a delimiter. It should divide the string into an array of substrings, separated by the specified delimiter, and return the resulting array.

const splitStringIntoArray = (str, a) => str.split(a);

// Search

// Create a function search that takes two parameters: an array of strings, and a string keyword.
// The function should return the string from the array that contains the keyword.
// Assume that there is only 1 string containing the keyword.

const search = (arr, str) => {
    for (let e of arr) {
        if (e.includes(str)) return e 
    }
} 

// Tests

console.log(search(['hello world','good morning'],'world')) // hello world'
console.log(search(['123456','911'],'9')) // '911'

// Flip the String
// Create a function flipString that takes a string and returns the string flipped.

const flipString = str => str.split('').reverse().join('');

// Tests

console.log(flipString('Hello')) // olleH'
console.log(flipString('')) // '
console.log(flipString('Haiku Academy')) // ymedacA ukiaH'


// Format Phone Number

// A list of phone numbers was entered in the database as plain numbers, without proper formatting.
// Create a function formatPhoneNumber that takes a 12 digit number and formats it according to the tests.
// Assume the phone numbers never start with a zero.
// If the number is not a number, if it's falsy or if it's not 12 digits, return the error message.

function formatPhoneNumber(phone) {
    if (!phone || typeof phone !== 'number' || phone.toString().length !== 12) {
        return 'invalid number'
    }
    let arr = []
    phone = phone.toString()
    arr[0] = phone.slice(0,3)
    arr[1] = phone.slice(3,6)
    arr[2] = phone.slice(6,9)
    arr[3] = phone.slice(9,12)

    return arr.join('-')
}


console.log(formatPhoneNumber(123456789012)) // 123-456-789-012'
console.log(formatPhoneNumber(123)) // invalid number'
console.log(formatPhoneNumber(999999999999)) // 999-999-999-999'
console.log(formatPhoneNumber(783543777241)) // 783-543-777-241'
console.log(formatPhoneNumber(null)) // invalid number'



// Count Vowels

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    // Check if string is not a string
    if (typeof str !== 'string') {
        return 'Please provide a string'
    }
    let letters = str.split('') // Converting string to array of letters
    let count = 0 
    for (let letter of letters){
        // Create a boolean with the condition to check for vowels
      let isVowel = letter.includes('a') || letter.includes('e') || letter.includes('i') || letter.includes('o') || letter.includes('u') ? true : false 

      if (isVowel) {
        count++
      }
    }
    return count;
  }

  // Tests

  console.log(getCount('aeiou'))
  console.log(getCount('arty'))
  console.log(getCount(5))

  
  // Invert Values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.


function invert(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= -1
    }
    return arr
}

// Tests

console.log(invert([1,2,3,4,5])) // [-1,-2,-3,-4,-5]
console.log(invert([1,-2,3,-4,5])) // [-1,2,-3,4,-5]
console.log(invert([])) // []


// Calculates average

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
    // Check that the array is not empty
    if (array.length === 0) return 0;
    let sum = 0
    for (let e of array) {
        sum += e
    } 
    return sum /= array.length;
}

console.log(findAverage([1,1,1]))


// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    let sum = yourPoints
    for (let score of classPoints) {
        sum += score
    }
    let average = sum / (1 + classPoints.length)
    return yourPoints > average ? true : false
}

  console.log(betterThanAverage([2, 3], 5))



  