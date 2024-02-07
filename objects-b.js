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


// Add Age

// Your task is to create a JavaScript function named addAge.
// This function should take two parameters: an object and a number.
// The function should add the provided number to the object as age 
// and return the updated object.

function addAge(obj, n) {
    obj.age = n
    return obj
}

// Add Ages

// Your task is to create a JavaScript function named addAges.
// This function should take two parameters: an array of objects and 
// an array of numbers of equal length.
// The function should add the numbers in the second array to the objects 
// as age, following the corresponding index, and return the updated array of objects.


function addAges(objects, ages) {
    let i = 0
    for (let obj of objects) {
        obj.age = ages[i]
        i++
    }
    return objects
}

// addAges([{'name':'Alice','age':21},{'name':'Bob','age':51}],[21,51])


// Format the Data

// Create a function formatData that receives an array of products from a database.
// Unfortunately, the data is corrupt, some of the objects in the array have a 
// price field of type number but others are strings.
// Some of the products have an inStock field of type boolean, others are the 
// string 'yes' or 'no' and others don't have the field at all.

// The functions should:

// convert all products prices to numbers
// convert all products inStock property to booleans ('yes' -> true, 'no' -> false) 
// and add a default true if the property doesn't exist
// then return the updated and properly formatted array


function formatData(products) {
    for (let product of products) {
        product.price = Number(product.price)
        if (product.inStock === 'yes' || !product.inStock) {
            product.inStock = true
        } else if (product.inStock === 'no') {
            product.inStock = false
        }
    }
    return products
}

console.log(formatData([{'name':'shoes','price':10,'inStock':true},{'name':'skirt','price':'50','inStock':'yes'}]))