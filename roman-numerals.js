// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000


function solution (roman) {
    // Transform string into array of letters
    let letters = roman.split('')
    let rawNumbers = letters.map(letter => {
        if (letter === 'M') {return number = 1000}
        if (letter === 'D') {return number = 500}
        if (letter === 'C') {return number = 100}
        if (letter === 'L') {return number = 50}
        if (letter === 'X') {return number = 10}
        if (letter === 'V') {return number = 5}
        if (letter === 'I') {return number = 1}
    })
    let sum = 0
    for (let i = 0; i < rawNumbers.length; i++) {
        if (i === rawNumbers.length - 1) {
            sum += rawNumbers[i]
        } else if (rawNumbers[i] >= rawNumbers[i+1]) {
            sum += rawNumbers[i]
        } else if (rawNumbers[i] < rawNumbers[i+1]) {
            rawNumbers[i+1] -= rawNumbers[i]
        }
    }
    return sum
  }

// console.log(solution("MDCLXVI"))
// console.log(solution("MCMXC"))

// MCMXC

//   Roman as a string
// Extract two first letters from left
// If second letter is higher than the first
//   substract 1st letter to the second and move to the next two letters
// If second letter is <= than the first, we sum the 1st and move one position


function spinWords(string){
    // We turn the string into an array of words
    return string.split(' ').map( str => {
        return (str.length > 4) ? str.split('').reverse().join('') : str;
    }).join(' ')
}

function spinWords2(words){
    return words.split(' ').map((word) => {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

// for (let i = 0; i < strArr.length; i++) {
//   if (strArr[i].length >= 5) {
//     strArr[i] = strArr[i].split('').reverse().join('')
//     console.log(strArr[i])
//   }
// } strArr.join(' ')
//  console.log(spinWords("Hey fellow warriors"))  // "Hey wollef sroirraw" 
//  console.log(spinWords("This is a test"))        // "This is a test" 
//  console.log(spinWords("This is another test"))  // "This is rehtona test"

 function createPhoneNumber(numbers){
    numbers.unshift(`(`)
    numbers.splice(4,0,`) `)
    numbers.splice(8,0,`-`)
    let phoneNumber = numbers.join('')
    return phoneNumber
  }


//   console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].unshift(3))

//   console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    let newArr = []
    let endArr = []
    for (const e of arr) {
        e === 0 ? endArr.push(e) : newArr.push(e)
    } 
    newArr.push(...endArr)
    return newArr
  }


console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) 
// returns[false,1,1,2,1,3,"a",0,0]
