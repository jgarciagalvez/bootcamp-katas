// Function that sums positives in an array

function sumPositives2(arr) {
    // Define sum variable
    let sum = 0
    // Iterate through all elements in the array
    for (let i = 0; i < arr.length; i++) {
        // is element > 0 -> add to sum
        if (arr[i] > 0)  {
            sum = sum + arr[i]
            console.log(arr[i])
            console.log(sum)
        }
    }   
    // return sum
    return sum
}

function sumPositives(arr)  {
    let sum = arr.filter(e => e > 0).reduce((sum, e) => {
        return sum += e
    }
    )
    return sum
} 

// console.log(sum([-1,2,-3,4])) // 6
console.log(sumPositives([2,2])) // 4
// console.log(sumPositives([-1,-1])) 

console.log(sumPositives([-1,2,-3,4, '5',1 ,2])) // 6
console.log(sumPositives([2,2])) // 4
// console.log(sumPositives([-1,-1])) // 0


const obj = {a:1, b:2}
obj
const obj2 = {...obj}
// const obj2 = obj
obj2
obj2.a = 1
obj2
obj
console.log(obj.a === obj2.a)
