if ("hello")
    console.log("String is Truthy")

if (45)
    console.log("Number is Truthy")

if ({})
    console.log("Empty object is Truthy")

if ([])
    console.log("Empty array is Truthy")

if("") console.log("wont print")

if(NaN) console.log("NaN wont print");

if(undefined) console.log("undefined wont print");

if(null) console.log("Null wont print");

if(0) console.log("Nan wont print");

let name = undefined

if(name){
    console.log("Hi")
}else console.log("Bye")