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
        if (product.inStock === 'no' || product.inStock === false) {
        product.inStock = false
        } else if (product.inStock === 'yes' || !product.inStock) {
            product.inStock = true
        }
    }
    return products
}

console.log(formatData([{'name':'shoes','price':10,'inStock':true},{'name':'skirt','price':'50','inStock':'yes'}]))
console.log(formatData([{'name':'jacket','price':90.5,'inStock':false}]))

// Delete User Password

// A query has been made to a database and a user object was returned, including 
// the password property, which should not be shared for security reasons.
// Create a function removePassword that takes a user in the format of an object, 
// deletes the password from the user, then returns the user with all its fields but 
// not the password.

function removePassword(user) {
    delete user.password 
    return user
}


// Delete Non-Encrypted Passwords

// A query has been made to a database and an array of users was returned, 
// including the password property for each user object.
// Some of the passwords are encrypted (the user has an encrypted: true property), 
// while others are not.
// Create a function removePasswords that takes a list of users in the format of an 
// array of objects, deletes the password field only from users whose password is NOT 
// encrypted, as well as the encrypted property, then returns the updated users array.


function removePasswords(users) {
    for (let user of users) {
        if (!user.encrypted) {
            delete user.password
        }
        delete user.encrypted
    }
    return users
}

console.log(removePasswords([{'name':'Jack','age':45},{'name':'Bob','age':27,'password':'9!4%2!@'}]))

// Create a Method

// Create an object greeter and add a method sayHello to it.
// The method should return 'Hello World'

let greeter1 = {
    sayHello: function() {
        return 'Hello World'
    }
}

console.log(greeter1.sayHello()) // 'Hello World'

// Greet by name

// Create an object greeter.
// In the object, create a method sayHello that takes a parameter, 
// then returns a string as per the tests below.

let greeter = {
    sayHello: function(name) {
        return 'Hello ' + name
    }
}

console.log(greeter.sayHello('John')) // 'Hello John'
greeter.sayHello('Alice') // 'Hello Alice'
greeter.sayHello() // 'Hello guest'


// Counter

// Create an object counter with 2 methods: increase and decrease.
// Each method takes an object, as per the below tests, and returns the object 
// with internal count value either increased by 1 or decreased by 1.

let counter = {
    increase: function(counter) {
        counter.count++
        return counter
    },
    decrease: function(counter) {
        counter.count--
        return counter
    }
}
console.log(counter.increase({ count: 1 })) // { count: 2 }
console.log(counter.increase({ count: 10 })) // { count: 11 }
console.log(counter.decrease({ count: 1 })) // { count: 0 }
console.log(counter.decrease({ count: 10 })) // { count: 9 }


// Nutrition
// In this kata, you're going to create a mini JS library that is useful to 
// calculate a number of values related to nutrition.

// Create an object named nutrition
// Within the object, create the following methods. For each method you have the formula that should be used to calculate the result.
// calculateCaloriesFromMacros(protein, carbs, fat)
// Total Calories = (Protein * 4) + (Carbs * 4) + (Fat * 9)

// calculateBMI(weight, height)
// BMI = weight / (height squared) * 10000

// calculateBMR(weight, height, age, gender)
// For 'male', BMR = 10 * weight + 6.25 * height - 5 * age + 5
// For 'femal', BMR = 10 * weight + 6.25 * height - 5 * age - 161

// calculateWaterIntake(weight)
// Water Intake = weight * 0.033

let nutrition = {
    calculateCaloriesFromMacros(protein, carbs, fat) {
        let totalCal = (protein * 4) + (carbs * 4) + (fat * 9)
        return totalCal
    },
    calculateBMI(weight, height) {
        let BMI = weight / (height * height) * 10000
        return BMI
    },
    calculateBMR(weight, height, age, gender){
        let BMR
        if (gender === 'male'){
            BMR = 10 * weight + 6.25 * height - 5 * age + 5
        }
        if (gender === 'female') {
            BMR = 10 * weight + 6.25 * height - 5 * age - 161
        }
        return BMR
    },
    calculateWaterIntake(weight) {
        let waterIntake = weight * 0.033
        return waterIntake
    }
}


console.log(nutrition.calculateCaloriesFromMacros(150, 100, 50)) // 1450
console.log(nutrition.calculateCaloriesFromMacros(100, 120, 30)) // 1150
console.log(nutrition.calculateBMI(80, 180)) // ~27.05
console.log(nutrition.calculateBMR(80, 180, 35, 'male')) // 1755
console.log(nutrition.calculateBMR(60, 170, 26, 'female')) // 1371.5
console.log(nutrition.calculateWaterIntake(80)) // 2.64
console.log(nutrition.calculateWaterIntake(55)) // ~1.81



// Find the Smallest Number

// Create a JavaScript function called findSmallestNumber.
// This function should take between 2 and 4 numbers as its parameters and return the smallest number.
// Use the correct Math method.


function findSmallestNumber(a, b, c, d) {
    if (d) {
        return Math.min(a,b,c,d)
    } else if (c) {
        return Math.min(a, b, c)
    } else if (b) {
        return Math.min(a,b)
    } else {
        return "Provide between 2 and 4 numbers"  
    }
}

console.log(findSmallestNumber(8))
console.log(findSmallestNumber(8,1))
console.log(findSmallestNumber(2,71,5))
console.log(findSmallestNumber(20,80,-5, 10))
console.log(findSmallestNumber(20,80,5, 10,25, 1))

// Other option (although I would reorder the validation checks from d down)
// function findSmallestNumber2(a, b, c, d) {
//     if (typeof b === 'undefined') {
//         return 'Please provide between 2 or 4 numbers'
//     }
//     if (typeof c === 'undefined') {
//         c = Math.min(a, b)
//     } 
//     if (typeof d === 'undefined') {
//         d = Math.min(a,b,c)
//     }
//     return Math.min(a,b,c,d)
// }




// Correct Square Roots

// Create a function checkSquareRoot that takes an array of objects.
// Each object contains a value and a squareRoot property, where the squareRoot indicates the square root of the value.
// If the square root is correct, add a property correct with a value of true to the object, otherwise false.
// The function should then return the array of objects with their new correct field.

function checkSquareRoot(objects) {
    for (let item of objects) {
        item.correct = false
        if (Math.sqrt(item.value) === item.squareRoot) {
            item.correct = true
        }
    }
    return objects
}

// Win the lottery

// Create a function winTheLottery that takes an array of 4 strings, as per the tests below.
// The function should generate a random number between 0 and 4 which will be used to extract one of the strings from the array.
// The functions should then return the extracted string.



function winTheLottery(arr) {
    let i = Math.floor(Math.random() * 4)
    return arr[i]
}

console.log(winTheLottery(['lose', 'lose', 'win', 'lose'])) // sometimes 'win', sometimes 'lose'

// This is a solution I came up with first. Not ideal, but it worked
// function winTheLottery(array) {
//     let n = Math.random() * 10
//     if (n < 2.5) {
//         i = 0 
//     }
//     if (n >=2.5 && n < 5) {
//         i = 1
//     }
//     if (n >=5 && n < 7.5) {
//         i = 2
//     }
//     if (n >= 7.5) {
//         i = 3
//     }
//     return array[i]
// }


