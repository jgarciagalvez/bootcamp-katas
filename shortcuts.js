// Decrementing a Value

// Create a JavaScript function called decrementValue.
// This function should take a single parameter, a number, and use the decrement operator to decrease the value of the number by one.
// The function should then return the decremented value.

const decrementValue = (a) => {a--; return a}

const decrementValue2 = a => --a // decrement operator needs to be on the left so it is executed before the return. On the right, it doesn't work because first it returns value of the variable and then performs the decrement.

// Shortcut in a Loop

// Use a shortcut in the following function to replace the increment of i in the loop and the increment of sum.

function timer() {
  let sum = 0
  for (let i = 0; i < 10; i++) {
    sum++
  }
  return sum
}

// Addition Assignment

// Replace the sum calculation in the following code with the Addition Assignment operator.
// Don't delete the variable c.

function addTen(a) {
    let c = 10
    c += a
    return c
}

// If to Ternary
// In the following function, convert the if condition into a ternary operator.

function numerToBoolean2(n) {
    if (n > 0) {
        return true
    } else {
        return false
    }
}

const numerToBoolean = (n) => {return n > 0 ? true : false} 

console.log(numerToBoolean(5))
console.log(numerToBoolean(-20))


// Half or Double

// Create a function halfOrDouble that takes an array of numbers.
// The function should then check the value of each number and, if it's less than 10, it should double it, otherwise it should halve it.
// The function should then return the updated array.
// Use a ternary operator.

// NOTE: just updating the "item" didn't work. It needs to update the element in the array. As with the for ... of loop we don't know the index of the array item, we create an index variable and then use it for updating the relevant element in the array

function halfOrDouble(array) {
    let i = 0
    for (let item of array) {
        array[i] = item <= 10 ? item * 2 : item / 2
        i++
    }
    return array
}


console.log(halfOrDouble([10,5,2,14])) // [20,10,4,7]
console.log(halfOrDouble([-20,1,70,2,9,0,16])) // [-40,2,35,4,18,0,8]
console.log(halfOrDouble([])) // []

// Function to Arrow
// Convert the following function into an arrow function.

function add1(a, b) {
    return a + b
}

const add = (a, b) => a + b

// Fix the Arrow Functions

// The following arrow functions are broken. Can you fix them?

// const subtract (a, b) => a - b

const subtract = (a, b) => a - b

// const multiply = a, b => a * b

const multiply = (a, b) => a * b

// const divide = (a, b) => { a / b }

const divide = (a, b) => { return a / b }


// Simplify the Arrow Function

// Simplify the following arrow function to its shortest form (1 single line), and use a ternary operator.

const checkPositive = (n) => { return n > 0 ? true : false }






// Concatenation to Template Literal

// Convert the following String Concatenation into a Template Literal.

function greet(age, city) {
    return 'Hello, I\'m ' + age + ' years old and I\'m from ' + city + '!'
}

// Time Greet

// Create an arrow function greetTime that takes a parameter time (a number).
// Inside the function, create a second arrow function checkTime that takes a parameter t (a number).
// Within the checkTime function, use a ternary operator to check if t is less than 12, if it is, return 'morning', otherwise return 'evening'.
// Within the greetTime function, return a template literal that includes the invokation of the function checkTime, passing time as a parameter, to then return either of the following strings:

'Good morning'
'Good evening'