const { CLIENT_RENEG_LIMIT } = require("node:tls")

console.log(typeof "200")

let str = "Hello, World!"
console.log(str.length) // 13


// Access characters by index

console.log(str[0])
console.log(str[3])
console.log(str[7])
console.log(str[13])


console.log(str.at(0))
console.log(str.at(-3))
console.log(str.at(-4))


console.log(str.charAt(0));


console.log(str.charCodeAt(0));