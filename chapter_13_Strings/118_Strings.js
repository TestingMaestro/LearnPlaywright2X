let a = " Hello"
let b = 'world'

let name = "yash"
let msg = `Hello ${name}! and 2 + 2 = ${2 + 2}`
console.log(msg)


// Multiline Strings

let report = `
Test: Login
Status: Pass
Duration: 320ms
`;

// using built-in String class

let str = String(200)
console.log(typeof str)
console.log(typeof String)

String(true) //"true"
String([1,2]) // true
String(null) // "null"