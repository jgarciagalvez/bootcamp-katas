// ## Sum of Squares ##

// Your task is to create two functions.
// The first function, calculateSquare, should take a number as a parameter 
// and return its square.
// The second function, sumOfSquares, should take two numbers, invoke calculateSquare 
// for each number, and then return the sum of their squares.


function calculateSquare(n) {
    if(typeof n === 'number') {
        return n * n
    } else {
        return 'Error: not a number'
    }

}
function sumOfSquares(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return calculateSquare(a) + calculateSquare(b)
    } else {
        return 'Error: please provide 2 numbers'
    }
}

// Tests for function

// console.log(sumOfSquares(5, 5)) // 50
// console.log(sumOfSquares(4, 10)) // 116
// console.log(sumOfSquares('two', 10)) // 116



// ## Shapes Area ##

// Your task is to create three functions in JavaScript to calculate the area of rectangles and triangles.
// The first two functions calcAreaRectangle and calcAreaTriangle will calculate the areas of a rectangle and 
// a triangle, respectively.
// The formula for a rectangle is a * b, while for a triangle it's a * b / 2.
// The third function calcArea, takes 2 numbers and a string 'rectangle' or 'triangle' and decides which calculation 
// to perform based on the given string.
// If a different string, or no string, is passed, return null.


function calcAreaRectangle(a, b) {
    return a * b
}

function calcAreaTriangle(a, b) {
    return (a * b) / 2
}

function calcArea (a, b, c) {
    if (c === 'rectangle') {
         return calcAreaRectangle (a, b)
    } else if (c === 'triangle') {
        return calcAreaTriangle (a, b)
    }
    return null
}

// Tests for function

// console.log(calcArea(100, 5, 'rectangle')) // 500
// console.log(calcArea(100, 50, "triangle")) // 250
// console.log(calcArea(10, 10, "rectangle")) // 100
// console.log(calcArea(10, 10, "triangle")) // 50
// console.log(calcArea(30, 20)) // null
// console.log(calcArea(30, 20, "cube")) // null



// ## Sum of Even Numbers

// Your task is to create a JavaScript function sumEvenNumbers that processes an array of numbers.
// For each number in the array, the function should call an external function isEven to check if the number is even.
// Then, it should sum all the even numbers and return the total sum.


function isEven(a) {
    if (a % 2 === 0) {
        return true
    } else {
        return false
    }
}

function sumEvenNumbers(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            sum = sum + arr[i]
        }
    }
    return sum
}

// Tests for the function

// console.log(sumEvenNumbers([1, 20, 5, 4])) // 24
// console.log(sumEvenNumbers([0, 100, -20, 5.5, -10])) // 70
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])) // 12