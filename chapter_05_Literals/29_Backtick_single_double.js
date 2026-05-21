// 29_Backtick_single_double.js
// Difference between backtick, single, and double quotes in JavaScript

/*
  EXPLANATION:
  ------------
  Single ('hello') and double ("hello") quotes are IDENTICAL in JavaScript.
  Use whichever you prefer, but be consistent. They create simple strings
  with NO special powers — you must use \n for newlines and + for concatenation.

  Backticks (`hello`) are TEMPLATE LITERALS. They can do everything the
  other two do, PLUS two extra features:
    1. STRING INTERPOLATION: Embed variables/expressions inside ${...}
    2. MULTILINE STRINGS: Just press Enter — no \n needed
*/

// --------------------------------------------------
// Single vs Double Quotes (exactly the same behavior)
// --------------------------------------------------
let single = 'Hello World';
let double = "Hello World";
console.log(single === double); // true

// You must escape the same quote type inside the string
let quote1 = 'It\'s a sunny day';
let quote2 = "She said \"Hi\"";
console.log(quote1);
console.log(quote2);

// Concatenation with + operator
let name = "Alice";
let greeting = "Hello, " + name + "!";
console.log(greeting);

// ------------------
// Backticks (``)
// ------------------

// 1. STRING INTERPOLATION
let user = "Bob";
let age = 25;
let message = `Hello ${user}, you are ${age} years old.`;
console.log(message);

let calc = `Next year you will be ${age + 1}`;
console.log(calc);

// 2. MULTILINE STRINGS
let multi = `This is line one
This is line two
This is line three`;
console.log(multi);

// 3. You can still use single/double quotes freely inside backticks
let easy = `It's a "great" day!`;
console.log(easy);

// 4. Expression evaluation
let price = 100;
let tax = 0.18;
console.log(`Total price: $${price + (price * tax)}`);

/*
  QUICK REFERENCE:
  ----------------
  'text'  → Simple string
  "text"  → Simple string (same as single)
  `text`  → Template literal (supports ${...} and multiline)
*/
