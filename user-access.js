// Create a function canAccess that takes 2 parameters: role (a string) and isActive (a boolean).
// The function should return 'true' if the user's role is either 'admin' or 'editor' and their account is active.
// For all other scenarios, the function should return 'false'.


function canAccess(role, isActive) {
    if ((role === 'admin' || role === 'editor') && isActive) {
        return 'true'
    }
    return 'false'
}