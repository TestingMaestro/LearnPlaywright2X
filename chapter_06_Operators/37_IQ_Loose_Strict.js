console.log("" == 0) // true

console.log("0" == 0) // true

console.log("0" == "") //Transitively Broken - false no type conversion -> it acts as === and js sees both are different strings



console.log(0 == false)// true
console.log(null == 0) //false
console.log(null == undefined) //true
console.log(null === undefined) //false
console.log(undefined == 0)     // false
console.log(null == false)      // false
console.log(undefined == false) // false