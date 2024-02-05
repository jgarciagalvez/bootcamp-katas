// ## Sum of Squares
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

console.log(sumOfSquares(5, 5)) // 50
console.log(sumOfSquares(4, 10)) // 116
console.log(sumOfSquares('two', 10)) // 116