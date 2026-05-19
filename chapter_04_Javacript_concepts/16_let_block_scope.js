let v = 10 //  Global Scope - Global Variable
console.log(v)


function printHello() {
    console.log("Hello Yash")
    let v = 20 // Local Scope
    console.log(v) // 20

    if (true) {
        let v = 30
        console.log(v) // value of v ends here in if block
    }
    console.log("F -> ",v) // -> 20--> block scope -> available from start of function till end
}
printHello()