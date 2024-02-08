// Create a function checkVehicle that takes a parameter vehicle (a string).
// The function should prevent 'car', 'truck' and 'motorbike' from accessing the park, 
// returning 'not allowed', and should allow anyone else, such as 'pedestrian' or 'bicycle' in, returning 'allowed'.
// Use the NOT EQUAL operator.
function checkVehicle(vehicle) {
    if (vehicle !== 'car' && vehicle !== 'truck' && vehicle !== 'motorbike' ) {
        return 'allowed'
    }
    return 'not allowed'
}

// Simplified function

const checkVehicle2 = vehicle => {
    const condition = vehicle !== 'car' && vehicle !== 'truck' && vehicle !== 'motorbike'
    return (condition) ? 'allowed' : 'not allowed'
}

console.log(checkVehicle2('truck'))