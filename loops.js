// ## For Loop
// Your task is to write a JavaScript function named sumNumbers that uses a for loop to sum up all 
// numbers from 1 to a given number n.
// This function, should take one parameter n and return the sum of all 
// numbers from 1 up to (and including) n.

function sumNumbers(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum
}

// ## Extract and Sort
// Your task is to write a JavaScript function that uses a "for" loop to extract the first n elements 
// from an array of numbers and return them in descending order.
// The function, named extractAndSort, will take two parameters: an array of numbers and a numerical 
// value n indicating how many elements to extract.
// Before returning the output array, convert it into a string.