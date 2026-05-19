const baseURL = "https://app.testingacademy.com"
// baseURL = "https://app.vwo.com" // re-assignment not allowed -> TypeError: Assignment to constant variable.

//const baseURL = "https://motherfather.com"// re declaration not allowed -> SyntaxError: Identifier 'baseURL' has already been declared

const name = 'Yash'

{
    const name = "Yash" // allowed - available only inside block 
    //name = "sony" // reassigned inside block -> not allowed ->TypeError: Assignment to constant variable.
    //const name = "kacha"// redeclared inside the block - not allowed
}
// outside the block nothing is allowed