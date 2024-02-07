// Mark as Paid

// Your task is to create a function called markAsPaid.
// This function should take an object as its only parameter (a bill), update 
// the status property of the bill to paid, and then return the updated object.

function markAsPaid(obj) {
    obj.status = 'paid'
    return obj
}

// let a = {"total": "105", "status": "pending"}
// console.log(markAsPaid(a)) // {"total": "105", "status": "paid"}
// let b = {"total": "33.2", "status": "pending"}
// console.log(markAsPaid(b)) // {"total": "33.2", "status": "paid"}


// Mark as Value

// Your task is to create a function called markAsValue.
// This function should take 2 parameters: an object (a bill), and a string (a value).
// The function should update the status property of the bill to value parameter, 
// and then return the updated object.

function markAsValue(obj, string) {
    obj.status = string
    return obj
}

// let a = {"total": "99", "status": "pending"}
// console.log(markAsValue(a, "accepted")) // {"total": "99", "status": "accepted"}
// let b = {"total": "71.5", "status": "pending"}
// console.log(markAsValue(b, "denied")) // {"total": "71.5", "status": "denied"}


// Updating a Nested Array in an Object

// Create a JavaScript function named updateNestedArray.
// This function should take three parameters: an object, a number and a string.
// The object contains a nested array of strings. 
// The function should update the element in the array at the index specified 
// by the number parameter to the value provided by the string parameter.
// After updating, the function should return the modified object.

function updateNestedArray(obj, i, string) {
    obj.fruits[i] = string
    return obj
}


let a = {"fruits": ["apple", "banana"]}
console.log(updateNestedArray(a, 1, "cherry")) 
// {"fruits": ["apple", "cherry"]}
let b = {"fruits": ["pineapple", "strawberry"]}
console.log(updateNestedArray(b, 0, "kiwi")) 
// {"fruits": ["kiwi", "strawberry"]}



// Reducing Product Prices by 10%

// Write a function named reducePrices.
// The function takes an array of objects as a parameter. 
// Each object represents a product with a price property.
// The task is to reduce the price property of each product by 10%.
// Return the array with the updated product objects.

function reducePrices(products) {
    for (let product of products) {
        product.price *= 0.9
    }
    return products
}

