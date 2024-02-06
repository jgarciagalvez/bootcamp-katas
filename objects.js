/* #############
OBJECT RELATED KATAS
##############*/

// Create House Object

// let house = {
//     rooms: 2,
//     windows: 2,
//     bathrooms: 1,
//     material: 'stone'
// }

// Villa Object + nested livingroom object

let villa = {
    windows: 6,
    material: 'stone',
    livingroom: {
        windows: 2,
        doors: 1
    }
}

// Count the Windows Function
// Create a function countWindows that counts, 
// then returns, the total number of windows in the house parameter object

let house = {
    livingRoom: {
      windows: 4
    },
    bedroom: {
      windows: 2
    },
    kitchen: {
      windows: 1
    }
}

function countWindows(obj) {
    let windows = obj.livingRoom.windows + obj.bedroom.windows + obj.kitchen.windows
    return windows
}

//Accessing Nested Object Profiles

// Your task is to create a function named getNestedProperty.
// This function should take an object as its parameter.
// The object will have a nested structure, with an object inside the main object.
// You need to access the email property inside the nested object and return its value.


function getNestedProperty(obj) {
    return obj.contact.email
}

// Calculating Total Price from Array of Objects

// Create a function named calculateTotalPrice.
// This function should take an array of objects as its parameter.
// Each object in the array represents an item, and each item has a price property.
// The function should calculate the total price of all items in the array by 
// summing up their individual prices and return the total sum.

function calculateTotalPrice(arr) {
    let totalPrice = 0
    for (let item of arr) {
        totalPrice += item.price
    }
    return totalPrice
}

let products = [{name: "Bag", price: 90}, {name: "Shoes", price: 100}]
console.log(calculateTotalPrice(products)) // 190
 let b = [{"name": "Car", "price": 1000}, {"name": "Apple", "price": 5}, {"name": "Laptop", "price": 500}]
 console.log(calculateTotalPrice(b)) // 1505


 // Summing Positive Numbers in Nested Arrays

// Your task is to create a function named sumPositiveNumbers.
// This function should take an object as its parameter.
// Within this object, there are two properties array1 and array2, each containing 
// an array of numbers.
// The function should calculate the sum of all positive numbers from both arrays 
// combined and return the total sum.

function sumPositiveNumbers(obj) {
    let result = 0
    console.log(obj.array1)
    for (let num of obj.array1) {
        if (num > 0) {
            result += num
        }
    }
    for (let num of obj.array2) {
        if (num > 0) {
            result += num
        }
    }
    return result
}

let a2 = {
    array1: [1, -3, 5, 7],
    array2: [10, -2, 4, -5]
}
console.log(sumPositiveNumbers(a2)) // 27

let b2 = {
    array1: [10, 20, -9],
    array2: [200, 1]
}
console.log(sumPositiveNumbers(b2)) // 231

console.log(countWindows(house));