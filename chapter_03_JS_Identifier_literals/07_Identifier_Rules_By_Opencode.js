/**
 * ============================================================
 * IDENTIFIER RULES IN JAVASCRIPT
 * ============================================================
 * 
 * An identifier is a name given to variables, functions, classes,
 * or properties in JavaScript.
 * 
 * JavaScript identifiers are case-sensitive and must follow specific rules.
 */


// ============================================================
// RULE 1: Must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($)
// ============================================================

let name = "John";           // Valid: starts with a letter
let _age = 25;               // Valid: starts with underscore
let $price = 100;            // Valid: starts with dollar sign

// let 1stPlace = "Gold";    // Invalid: cannot start with a digit
// SyntaxError: Invalid or unexpected token


// ============================================================
// RULE 2: After the first character, digits (0-9) are allowed
// ============================================================

let name1 = "Alice";         // Valid: starts with letter, contains digit
let _value2 = 50;            // Valid: starts with underscore, contains digit
let $item3 = "Book";         // Valid: starts with dollar sign, contains digit
let var123 = true;           // Valid: letters followed by digits


// ============================================================
// RULE 3: Cannot use JavaScript Reserved Words (Keywords) as identifiers
// ============================================================

// Examples of INVALID identifiers (reserved words):
// let var = 10;             // Invalid: 'var' is a keyword
// let function = "test";    // Invalid: 'function' is a keyword
// let class = "Math";       // Invalid: 'class' is a keyword
// let return = 5;           // Invalid: 'return' is a keyword
// let if = true;            // Invalid: 'if' is a keyword
// let else = false;         // Invalid: 'else' is a keyword
// let break = "stop";       // Invalid: 'break' is a keyword
// let for = "loop";         // Invalid: 'for' is a keyword
// let while = "loop";       // Invalid: 'while' is a keyword
// let new = "object";       // Invalid: 'new' is a keyword
// let this = "context";     // Invalid: 'this' is a keyword
// let true = 1;             // Invalid: 'true' is a reserved literal
// let false = 0;            // Invalid: 'false' is a reserved literal
// let null = "empty";       // Invalid: 'null' is a reserved literal

// Note: Some reserved words in strict mode:
// let implements = 1;       // Invalid in strict mode
// let interface = 1;        // Invalid in strict mode
// let package = 1;          // Invalid in strict mode
// let private = 1;          // Invalid in strict mode
// let protected = 1;        // Invalid in strict mode
// let public = 1;           // Invalid in strict mode
// let static = 1;           // Invalid in strict mode
// let yield = 1;            // Invalid in strict mode


// ============================================================
// RULE 4: JavaScript Identifiers are Case-Sensitive
// ============================================================

let username = "john_doe";
let UserName = "Jane_Doe";
let userName = "mike_smith";
let USERNAME = "admin";

console.log("username:", username);    // john_doe
console.log("UserName:", UserName);    // Jane_Doe
console.log("userName:", userName);    // mike_smith
console.log("USERNAME:", USERNAME);    // admin

// All four are DIFFERENT identifiers due to case sensitivity


// ============================================================
// RULE 5: No Spaces Allowed in Identifiers
// ============================================================

let firstName = "John";      // Valid: uses camelCase (recommended)
let last_name = "Doe";       // Valid: uses snake_case
// let first name = "John";  // Invalid: spaces are not allowed


// ============================================================
// RULE 6: Special characters (except _ and $) are NOT allowed
// ============================================================

// let first-name = "John";  // Invalid: hyphen (-) is not allowed
// let first@name = "John";  // Invalid: @ is not allowed
// let first#name = "John";  // Invalid: # is not allowed
// let first!name = "John";  // Invalid: ! is not allowed
// let first%name = "John";  // Invalid: % is not allowed
// let first&name = "John";  // Invalid: & is not allowed
// let first*name = "John";  // Invalid: * is not allowed
// let first(name = "John";  // Invalid: ( is not allowed
// let first)name = "John";  // Invalid: ) is not allowed
// let first+name = "John";  // Invalid: + is not allowed
// let first=name = "John";  // Invalid: = is not allowed
// let first[name = "John";  // Invalid: [ is not allowed
// let first]name = "John";  // Invalid: ] is not allowed
// let first{name = "John";  // Invalid: { is not allowed
// let first}name = "John";  // Invalid: } is not allowed
// let first|name = "John";  // Invalid: | is not allowed
// let first\name = "John";  // Invalid: \ is not allowed
// let first/name = "John";  // Invalid: / is not allowed
// let first?name = "John";  // Invalid: ? is not allowed
// let first<name = "John";  // Invalid: < is not allowed
// let first>name = "John";  // Invalid: > is not allowed
// let first,name = "John";  // Invalid: , is not allowed
// let first.name = "John";  // Invalid: . is not allowed
// let first:name = "John";  // Invalid: : is not allowed
// let first;name = "John";  // Invalid: ; is not allowed
// let first'name = "John";  // Invalid: ' is not allowed (in identifier)
// let first"name = "John";  // Invalid: " is not allowed
// let first`name = "John";  // Invalid: ` is not allowed
// let first~name = "John";  // Invalid: ~ is not allowed
// let first^name = "John";  // Invalid: ^ is not allowed


// ============================================================
// RULE 7: Unicode letters are allowed (but not recommended for best practice)
// ============================================================

let π = 3.14159;           // Valid: π is the Greek letter pi
let 学生 = "Student";     // Valid: Chinese characters (means "student")
let café = "coffee";         // Valid: accented characters

console.log("π value:", π);
console.log("学生:", 学生);
console.log("café:", café);

// However, for readability and maintainability, ASCII characters are recommended


// ============================================================
// RULE 8: Identifiers should be meaningful and descriptive (Best Practice)
// ============================================================

// Bad examples (not recommended):
let a = 10;
let x = "John";
let fn = function() {};

// Good examples (recommended):
let totalPrice = 150.00;
let customerName = "John Smith";
let calculateTotal = function(price, tax) {
    return price + tax;
};


// ============================================================
// CONVENTIONS AND BEST PRACTICES
// ============================================================

// 1. camelCase: Starts with lowercase, each new word capitalized
//    Used for: variables, functions, methods, object properties
let userAccount = "john123";
let getUserName = function() { return "John"; };

// 2. PascalCase: Starts with uppercase, each new word capitalized
//    Used for: class names, constructor functions, React components
class UserProfile {
    constructor(name) {
        this.name = name;
    }
}

// 3. snake_case: All lowercase with underscores
//    Used for: constants, some prefer for variables
const MAX_RETRY_COUNT = 3;
let user_profile_data = { name: "John" };

// 4. SCREAMING_SNAKE_CASE: All uppercase with underscores
//    Used for: constants
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT = 5000;


// ============================================================
// PRACTICAL EXAMPLES
// ============================================================

// Example 1: Valid identifiers for a simple e-commerce scenario
let productName = "Wireless Mouse";
let productPrice = 29.99;
let _productStock = 150;
let $productCurrency = "USD";
let isAvailable1 = true;

console.log("\n--- Product Info ---");
console.log("Name:", productName);
console.log("Price:", productPrice, $productCurrency);
console.log("Stock:", _productStock);
console.log("Available:", isAvailable1);


// Example 2: Function with valid identifiers
function calculateDiscount(originalPrice, discountPercentage) {
    let discountAmount = originalPrice * (discountPercentage / 100);
    let finalPrice = originalPrice - discountAmount;
    return finalPrice;
}

let originalPrice = 100;
let discountPercentage = 20;
let discountedPrice = calculateDiscount(originalPrice, discountPercentage);

console.log("\n--- Discount Calculation ---");
console.log("Original Price: $", originalPrice);
console.log("Discount:", discountPercentage, "%");
console.log("Final Price: $", discountedPrice);


// Example 3: Object with valid identifiers
let userProfile = {
    firstName: "Alice",
    lastName: "Johnson",
    age25: 25,                  // digit allowed after first char
    _isActive: true,
    $membershipType: "Premium",
    emailAddress1: "alice@example.com"
};

console.log("\n--- User Profile ---");
console.log("Full Name:", userProfile.firstName, userProfile.lastName);
console.log("Age:", userProfile.age25);
console.log("Active:", userProfile._isActive);
console.log("Membership:", userProfile.$membershipType);
console.log("Email:", userProfile.emailAddress1);


// ============================================================
// COMMON MISTAKES TO AVOID
// ============================================================

// Mistake 1: Starting with a number
// let 2fast = "car";           // SyntaxError

// Mistake 2: Using reserved words
// let let = 5;                 // SyntaxError
// let const = 10;              // SyntaxError

// Mistake 3: Using hyphens (treated as subtraction operator)
// let my-var = 10;             // SyntaxError

// Mistake 4: Confusing similar-looking identifiers
let number = 10;
let Number = 20;
// These are different variables! Avoid this confusion.


// ============================================================
// SUMMARY
// ============================================================
/*
VALID IDENTIFIER RULES:
1. Can start with: a-z, A-Z, _, $
2. Can contain: a-z, A-Z, 0-9, _, $ (after first character)
3. Cannot start with: 0-9
4. Cannot contain: spaces or special characters (except _ and $)
5. Cannot be: JavaScript reserved words/keywords
6. Case-sensitive: myVar, MyVar, myvar are all different
7. Unicode characters are technically valid but not recommended

NAMING CONVENTIONS:
- camelCase    : myVariableName (variables, functions)
- PascalCase   : MyClassName (classes, constructors)
- snake_case   : my_variable_name (constants, some variables)
- SCREAMING_SNAKE_CASE : MY_CONSTANT (constants)

BEST PRACTICES:
- Use descriptive, meaningful names
- Be consistent with your chosen convention
- Avoid single-letter names (except in loops like i, j)
- Don't use names that differ only by case
- Don't use names that differ only by underscore vs no underscore
*/
