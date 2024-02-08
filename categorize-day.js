// Task is to Create a function categorizeDay that categorizes the day based on temperature and weather conditions.
// Don't use the && or || symbols.

// The function should categorize the day as follows:
// If the temperature is 25 degrees or above and it's sunny, it's a "Beach day".
// If it's sunny but the temperature is below 25 degrees, it's a "Park day".
// If it's rainy and the temperature is below 15 degrees, it's a "Stay home" day.
// If it's rainy but the temperature is 15 degrees or above, it's a "Museum day".
// In all other cases, it's a "Casual day".


// This is the function necessary for passing the tests from the task
function categorizeDay(temperature, weather) {
    let day = 'Casual day'
    if (temperature >= 25) {
        if (weather === 'sunny') {
            day = 'Beach day'
        }
    } else if (temperature >= 15) {
        if (weather === 'sunny') {
            day = 'Park day'
        } else if (weather === 'rainy') {
            day = 'Museum day'
        }
    } else {
        if (weather === 'rainy') {
            day = 'Stay home'
        }
    }
    return day
}

const categorizeDay2 = (temp, weather) => {
    return (temp >= 25 && weather === 'sunny')
        ? 'Beach day'
        : (temp >= 15)
            ? (weather === 'sunny') 
                ? 'Park day'
                : (weather === 'rainy')
                    ? 'Museum day'
                    : "Causual day"
            : (weather === 'rainy')
                ? 'Stay home'
                : 'Casual Day'
}


console.log(categorizeDay2(26,'rainy'))


// Another function that categorise days based on weather first
// function categorizeDay(temperature, weather) {
//     let day = 'Casual day'
//     if (weather === 'sunny') {
//         if (temperature >= 25) {
//             day = 'Beach day'
//         } else {
//             day = 'Park day'
//         }
//     } else if (weather === 'rainy') {
//         if (temperature >= 15) {
//             day = 'Museum day'
//         } else {
//             day = 'Stay home'
//         }
//     }
//     return day
// }