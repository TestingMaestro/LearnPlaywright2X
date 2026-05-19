let retryCount = 0

retryCount += 1; // Re-assignment
console.log(retryCount)

retryCount += 1
console.log("Retry Attempts :", retryCount)


let retryCount = 10 // Re-declaration -> SyntaxError: Identifier 'retryCount' has already been declared
console.log("Retry Attempts :", retryCount)

// Block Scope
let testStatus = "pending"
if (testStatus === "pending") {
    let executionTime = 200
    console.log("Inside Block :", executionTime) // valid
}

console.log("Outside Block :", executionTime) // Not allowed -> ReferenceError: executionTime is not defined