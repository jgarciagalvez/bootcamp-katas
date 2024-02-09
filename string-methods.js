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