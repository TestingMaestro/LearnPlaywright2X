var v = 10 //  Global Scope - Global Variable
console.log(v)


function printHello() {
    console.log("Hello Yash")
    var v = 20 // Local Scope
    console.log(v) // 20

    if (true) {
        var v = 30
        console.log(v)
    }
    console.log("F -> ",v)
}
printHello()