console.log(firstName)
var firstName = "Yash"
console.log(firstName)

//Behind the Scenes

// JS creates the variable asssuming that "firstName" is used somewhere
// var greeting               <--- Hoisted with undefined -> empty variable
// console.log(firstName)     <--- underfined
// firstName = "Yash"         <--- reassigned with Yash
// console.log(firstName)     <--- Prints Yash in the console