
console.log(42 == "42") // true

/**
 * Converts anything in the Right side (Any type) converts to Left side's type
 * left ->  42   -> Number
 * Right -> "42" -> String
 * 
 * Right converted to Left [checks value and converts to the number and then compares]
 * 
 * Converts
 * left  -> 42  -> Number
 * right -> 42  -> Number
 * 
 * Compares
 * 42 == 42 --> true
 * 
 */

console.log(42 === "42") // false

/**
 * Strict comparison -> compares both value and type
 * No conversion
 */

console.log(5 == 5)// true

console.log(5 === 5)// true

console.log(5 == "5")// true

console.log(5 === "5")// false

console.log(0 == "")// true

console.log(0 === "")// false

console.log(true == 1)// true 

console.log(false == 0)//true

console.log(true == "1")//true 

console.log(true == "2")//true 


console.log(5 != "5") // false
console.log(5 !== "5") //true



