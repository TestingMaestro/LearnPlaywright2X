// let atmCard = "Valid"
// let atmPwd = 1234

// if (atmCard) {
//     if (atmPwd === 1234) {
//         console.log("Valid pass! Withdraw amnt")
//     } else console.log("invalid pass")
// } else console.log("Invalid Card")

isLoggedIn = false
let isUserRole = "User1"
if (isLoggedIn) {
    if (isUserRole === "admin")
        console.log("Welcome admin role!! you have access to everything")
    else if (isUserRole === "Editor")
        console.log("Welcome admin editor role!! you have access to editor module")
    else if (isUserRole === "User")
        console.log("Welcome user role!! you have access to only creating users")
    else console.log("Create users")
}
else console.log("Failed to Login!! Try Again")