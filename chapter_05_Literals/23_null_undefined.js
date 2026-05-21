// null vs undefined in JavaScript
// Simple Explanation with Examples

/*
  ============================================================
  |  null                     |  undefined                 |
  ============================================================
  |  Intentionally empty      |  Unintentionally missing   |
  |  (You set it)             |  (JS sets it)              |
  |  typeof → "object"        |  typeof → "undefined"      |
  ============================================================
*/

// ----------------------------------------------------------
// 1. undefined
//    - JavaScript gives this to you when something is missing
//    - It means "this exists, but it has no value yet"
// ----------------------------------------------------------

let a;
console.log("1. Declared but not assigned:", a);          // undefined

function greet(name) {
  console.log("Hello " + name);
}
greet();                                                   // Hello undefined

let person = { age: 25 };
console.log("2. Missing property:", person.name);          // undefined

let arr = [10, 20];
console.log("3. Missing array element:", arr[5]);          // undefined

function sayHi() {
  // no return statement
}
console.log("4. Function with no return:", sayHi());       // undefined

// ----------------------------------------------------------
// 2. null
//    - YOU intentionally assign it to say "this is empty"
//    - It means "there is no value here on purpose"
// ----------------------------------------------------------

let selectedUser = null;  // No user is selected right now
console.log("5. Intentionally empty:", selectedUser);      // null

let user = {
  name: "Alex",
  email: null  // User has not provided an email yet (on purpose)
};
console.log("6. Property set to null:", user.email);       // null

// ----------------------------------------------------------
// 3. Key Differences (Simple Table)
// ----------------------------------------------------------

console.log("\n--- typeof ---");
console.log("typeof undefined:", typeof undefined);        // "undefined"
console.log("typeof null:", typeof null);                  // "object" (JavaScript bug from long ago)

console.log("\n--- Loose vs Strict Equality ---");
console.log("null == undefined:", null == undefined);      // true  (loose check)
console.log("null === undefined:", null === undefined);    // false (strict check, different types)

console.log("\n--- Checking for null ---");
let value = null;
if (value === null) {
  console.log("Value is explicitly null");
}

console.log("\n--- Checking for undefined ---");
let other;
if (other === undefined) {
  console.log("Value is undefined");
}

// ----------------------------------------------------------
// 4. Real-World Analogy
// ----------------------------------------------------------

/*
  Think of a box:

  undefined → The box exists, but you haven't looked inside yet.
              JavaScript says: "I don't know what's in there."

  null      → You looked inside the box and intentionally left it empty.
              You say: "I know there is nothing here, and that's correct."
*/

// ----------------------------------------------------------
// 5. Quick Reference
// ----------------------------------------------------------

/*
  When to use null:
    - To reset a variable on purpose
    - To indicate "no object" or "no value" intentionally

  When to use undefined:
    - Usually, you DON'T set it yourself
    - JavaScript uses it automatically
*/
