// Example 1: abc.status - STATIC (always)
// The property name "status" is written directly in the code and can never change.

let abc = {
    status: "active",
    age: 25
};

console.log("--- Example 1: Static (Dot Notation) ---");
console.log(abc.status);  // Output: "active"
// It ALWAYS looks for the property named "status". It cannot be changed at runtime.


// Example 2: abc["status"] - STATIC (string is hardcoded)
// The string "status" is written directly in the code. It is still fixed.

console.log("\n--- Example 2: Static (Bracket with hardcoded string) ---");
console.log(abc["status"]);  // Output: "active"
// It ALWAYS looks for the property named "status". The string is hardcoded, just like the dot.


// Example 3: abc[myVariable] - DYNAMIC (changes at runtime!)
// The property name comes from a VARIABLE, so it can change while the program runs.

console.log("\n--- Example 3: Dynamic (Bracket with variable) ---");

let myVariable = "status";
console.log(abc[myVariable]);  // Output: "active" (because myVariable is "status")

myVariable = "age";          // Now we change the variable!
console.log(abc[myVariable]);  // Output: 25 (because now myVariable is "age")

// The exact same line of code (abc[myVariable]) produced TWO different results!
// That is what "dynamic" means.
