
let firstName = "Yashodhar"
let lastName = "Karki"

let fullNameWithGreeting = `Hi ${firstName} ${lastName}! welcome to the Show`
console.log(fullNameWithGreeting)

// Expressions
let a = 10
let b = 20

let result = `Sum of ${a} + ${b} = ${a + b}`
console.log(result)



let env = "release"
env = "prod"

//1. String Interpolation
//api URLs
const userID = 1445
const apiURL = `https://api-${env}.aurigo.com/${userID}`
console.log(apiURL)

//Automaton Logs
const testName = "Login Test"
const status = "FAILED"
const duration = 2.5

console.log(`[${status}]. ${testName} completed in ${duration}s`)


// 2. Multiline Strings - : Just press Enter — no \n needed

let multiLine = `This is line 1
This is Line 2
This is Line 3`
console.log(`Multiline: ${multiLine}`)

// 4. Expression evaluation
let bankBalance = 10000
let withdrawalAmount = 5000
bankBalance = bankBalance - withdrawalAmount

console.log(`Amonut withdrawn = ${withdrawalAmount} and Balance remaining is ${bankBalance}`)

//Screenshot
const testCase = "Program_Flow"
const timeStramp = Date.now()
await.page.screenshot({ path: `screenshots/${testCase}_${timeStramp}.png` })
