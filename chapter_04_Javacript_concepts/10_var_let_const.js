var browser = "Chrome"
var browser = "Firfox" // redeclaration

browser = "Opera"//Re-assignment

// console.log(a); 
// let a = 10;

// console.log(a); 
// var a = 10;

// console.log(a); 
// const a = 10;

// for loop , functions

var testCases = ["login", "logout", "signup"]
for (var i = 0; i < testCases.length; i++) {
    console.log("Running Test", testCases[i])
}
console.log("Loop encounter leaked outside", i)