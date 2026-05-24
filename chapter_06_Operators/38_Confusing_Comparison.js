// Confusing Comparison Cases with == and ===

// NaN is the only value not equal to itself
console.log(NaN == NaN)  // false 🤯
console.log(NaN === NaN) // false

// Array to Number/String coercion
console.log([] == 0)   // true -> [] becomes "" then 0 🤯
console.log([] == "")  // true -> [] becomes ""
console.log([0] == 0)  // true -> [0] becomes "0" then 0 🤯
console.log([0] == false) // true -> [0] becomes 0, false becomes 0

// Array to String coercion
console.log([1, 2] == "1,2") // true -> array becomes string 🤯
console.log([1, 2] === "1,2") // false -> different types

// Object to primitive coercion (calls toString or valueOf)
console.log({} == "[object Object]") // true -> object to string 🤯
console.log({} === "[object Object]") // false

// Object to Number (no valueOf/toString returning primitive number)
console.log({} == 0)  // false -> {} becomes "[object Object]", NaN when converted to number
console.log([] == ![]) // true -> [] is truthy, ![] is false -> [] == false -> true 🤯

// null and undefined are only loosely equal to each other
console.log(null == undefined)  // true 🤯
console.log(null === undefined) // false
console.log(null == 0)          // false
console.log(undefined == 0)     // false
console.log(null == false)      // false
console.log(undefined == false) // false

// Booleans are coerced to numbers first in loose equality
console.log(true == "1")   // true -> true becomes 1, "1" becomes 1
console.log(true == "2")   // false -> 1 != 2
console.log(false == "0")  // true -> false becomes 0, "0" becomes 0
console.log(false == "")   // true -> false becomes 0, "" becomes 0
console.log(false === 0)   // false

// String "false" is NOT equal to boolean false
console.log(false == "false") // false -> false becomes 0, "false" becomes NaN 🤯

// Negative zero and positive zero
console.log(0 === -0)  // true
console.log(0 == -0)   // true

// Object wrapper vs primitive (loose equality coerces object to primitive)
console.log(new String("abc") == "abc")  // true
console.log(new String("abc") === "abc") // false
console.log(new Number(5) == 5)  // true
console.log(new Number(5) === 5) // false

// Transitivity is broken with loose equality
console.log("0" == 0)   // true
console.log(0 == "")    // true
console.log("0" == "")  // false -> transitivity fails 🤯

// typeof comparisons
console.log(typeof null === "object") // true - well-known JS bug 🤯
console.log(typeof [] === "object")   // true
console.log(typeof undefined === "undefined") // true

// Double negation comparison edge case
console.log(1 == true)   // true
console.log(2 == true)   // false
console.log(1 === true)  // false

// null with loose equality against objects / primitives
console.log(null == null)      // true
console.log(undefined == undefined) // true

// BigInt vs Number
console.log(1n == 1)   // true -> loose equality allows BigInt/Number comparison 🤯
console.log(1n === 1)  // false -> different types
console.log(0n == false) // true
console.log(0n === false) // false
