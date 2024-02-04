// Count Vowels
// Vowels are "a", "e", "i", "o" and "u".
// Create a function countVowels that takes an array of letters, and returns the number of vowels in the array.

function countVowels(letters) {
    let vowelsCount = 0
    for (let letter of letters) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            vowelsCount++
        }
    }
    return vowelsCount
}