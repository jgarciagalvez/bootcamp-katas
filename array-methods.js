// Return Length

// Create a function returnLength that takes an array as its only parameter, then returns the length of the array as a number, or 'the array is empty' if there are no elements in the array.

const returnLength = arr => {
    return arr.length !== 0 ? arr.length : 'the array is empty'
}

console.log(returnLength([1,2,3,4])	) 

// Sports Lenghts

// Create a function addSportsLengths that takes an array of objects.
// Each object contains an array of sports.
// The function should add a property sportsLength to each object, with the length of its sports array.

function addSportsLengths(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].sportsLength = arr[i].sports.length
    }
    return arr
}

// Tests

console.log(addSportsLengths([{'name':'John','sports':['football']},{'name':'Alice','sports':['tennis','golf']}])) 
// [{'name':'John','sports':['football'],'sportsLength':1},{'name':'Alice','sports':['tennis','golf'],'sportsLength':2}]
console.log(addSportsLengths([{'name':'Bob','sports':[]}])) 
// [{'name':'Bob','sports':[],'sportsLength':0}]



// Reverse Array

// Create a function reverseArray that takes an array and returns the array reversed.

const reverseArray = arr => arr.reverse()

console.log(reverseArray([1,2,3,4])) // Test



// Remove Empty Spots

// Create a function removeEmptySpots that takes an array as a parameter.
// The array may have a falsy value at the beginning or at the end (or both).
// The function should remove these falsy values and return the clean array.

function removeEmptySpots(arr) {
    let z = arr.length - 1
    if(!arr[z]) arr.pop(); // Need to work with the last one first as removing from beginning would have the value of z be incorrect
    if (!arr[0]) arr.shift();
    return arr
}

// Tests

console.log(removeEmptySpots([0,2,3,4,0])) // [2,3,4]
console.log(removeEmptySpots([1,2,3,4,'c'])) // [1,2,3,4,5]
console.log(removeEmptySpots([null,'a','b','c'])) // ['a','b','c']
console.log(removeEmptySpots([10,11,0,50,false])) // [10,11,0,50]
console.log(removeEmptySpots([0,100,'a','b',50,null])) // [100,'a','b',50]



// String Repeat

// Create a function stringRepeat that takes a number and a string, then returns the string repeated as many times as the number.

function stringRepeat(n, string) {
    let stringArray = []
    for (let i = 0; i < n; i++) {
        stringArray.push(string)
    }
    return stringArray.join('')
}

// Tests:

console.log(stringRepeat(5, 'hi')) // 'hihihihihi'
stringRepeat(2, 'hola') // 'holahola'

