// ## Function Add Discount
// Your goal is to write a JavaScript function named addDiscount that 
// takes two parameters: price and discount.
// The function should check if both parameters are numbers. If they are, it should 
// apply the discount to the price and return the new discounted price.
// If either parameter is not a number, the function should return the error 
// message: "Error: Invalid input"

function addDiscount(price, discount) {
    if (typeof price === 'number' && typeof discount === 'number') {
        let newPrice = price - price * discount
        return newPrice
    } else {
        return 'Error: Invalid input'
    }
}

// ## Formatting Name
// Create a JavaScript function named formatDisplayName that takes two parameters: 
// a user's first name and last name.
// If the last name is not provided, the function should return the error message: 
// "Last name missing".
// The function should check if both parameters are strings and then return a 
// formatted full name with a space in between.
// If either parameter is not a string, the function should return 
// the error message: "Error, not a string"

function formatDisplayName(firstName, lastName) {
    if (!lastName) {
        return 'Last name missing'
    }
    if (typeof firstName === 'string' && typeof lastName === 'string') {
        return firstName + ' ' + lastName
    } else {
        return 'Error, not a string'
    }
}

// It's more efficient to validate for errors first and then run the function
// we want to run

function formatDisplayName2(firstName, lastName) {
    if (!lastName) {
        return 'Last name missing'
    }
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
        return 'Error, not a string'
    }
    return firstName + ' ' + lastName
}

console.log(formatDisplayName('John', 0));
console.log(formatDisplayName2('John', 'Smith'))

// ## Sum Numbers in Array
// Create a function sumNumbers that takes an array as a parameter.
// The array can contain a combination of numbers, strings and booleans.
// The function should find all numbers in the array, add them and return the sum.
// If there are no numbers, the function should return 0.

function sumNumbers(arr) {
    let sum = 0
    for (let n of arr) {
        if (typeof n === 'number') {
            sum = sum + n
        }
    }
    return sum
}