//condition ? true : false

let age = 17

let result = age >= 18 ? "Go to Goa with your wife" : "Do not plan! shh!!"
console.log(result)


let num = 11;

let result1 = num % 2 == 0 ? "Even" : "Odd"
console.log(result1)

//RealTime Example : status code verification

let expectedStatusCode = 200
let actualStatusCode = 201
let testResult = expectedStatusCode === actualStatusCode ? "Pass" : "Fail"
console.log(testResult)


let env = "staging"
let baseUrl = env === "prod" ? "https://configplus1mconq2.aurigo.net" : "https://configplusstage@aurigo.net"
console.log(baseUrl)


let isCI = true
let browserMode = isCI ? "Headless" : "Headed"
console.log(`Running browser in ${browserMode} mode`)



let responseTime = 800 //ms
let sla = 1000 //ms
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Breached"
console.log(slaStatus)