let url = "https://staging.vwo.com/api/login?retry=true/staging"

// includes

console.log(url.includes("staging"))
console.log(url.includes("production"))

//startsWith and endsWith

console.log(url.startsWith("https://"));
console.log(url.endsWith("true"));

//indexOf and lastIndexOf

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("fu"));
console.log(url.lastIndexOf("ht"));

// Search
let str = "Hello, World!"
console.log(str.search("World"));

// Search wit RegEx -> Regular Expression

console.log(url.search(/staging/)) // Pattern match
console.log(url.search("staging"))