let a = 1000
let b = 20
let c = 150

let result = a > b && a > c ? "a is greater" : b > c ? "b is greater" : "c is greater"
console.log(result)

// a > b and a >c then b > c



let age = 50;

let vote = age >= 18 ? age <= 40 && age >= 50 ? "Sou can vote" : "Senior citizen" : "Sou cannot vote Tika muchkond manelirbeku"
console.log(vote)



let statusCode = 502
let cat = statusCode < 300 ? "Success" :
    statusCode < 400 ? "Redirect" :
        statusCode < 500 ? "Client Error" : "Server Error"

console.log(`Status ${statusCode} : ${cat}`)



let temp = 35
let feel = temp >= 40 ? " Very Hot" :
    temp >= 30 ? "Hot" :
        temp >= 20 ? "Warm" :
            temp >= 10 ? "Cool" : "Very Cold"
console.log(`Temperature: ${temp} | Feel: ${feel}`)