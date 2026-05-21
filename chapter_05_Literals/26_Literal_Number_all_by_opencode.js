// ============================================================
// JavaScript Number Types & Literals - Complete Guide
// File: 26_Literal_Number_all_by_opencode.js
// ============================================================

/*
  In JavaScript, there is ONLY ONE number type: "number"
  It follows the IEEE 754 standard (double-precision 64-bit format).
  There is NO separate int, float, double, or decimal type.

  However, ES2020 introduced BigInt for arbitrarily large integers.
*/

console.log("=== 1. INTEGER LITERALS (Base 10) ===");
let decimal = 42;
let negative = -100;
let zero = 0;
console.log("Decimal:", decimal, "Type:", typeof decimal);
console.log("Negative:", negative);
console.log("Zero:", zero);

console.log("\n=== 2. FLOATING-POINT LITERALS ===");
let float1 = 3.14;
let float2 = 0.5;
let float3 = 2.0;        // Treated as integer 2 internally
let float4 = .5;         // Valid, but less readable
console.log("3.14:", float1);
console.log("0.5:", float2);
console.log("2.0 (stored as):", float3);
console.log(".5:", float4);

console.log("\n=== 3. EXPONENTIAL (SCIENTIFIC) NOTATION ===");
let exp1 = 1e5;          // 1 × 10^5  = 100000
let exp2 = 2.5e-3;       // 2.5 × 10^-3 = 0.0025
let exp3 = 3E10;         // Case-insensitive 'e' or 'E'
console.log("1e5:", exp1);
console.log("2.5e-3:", exp2);
console.log("3E10:", exp3);

console.log("\n=== 4. HEXADECIMAL LITERALS (Base 16) ===");
let hex1 = 0xFF;         // 255
let hex2 = 0xA;          // 10
let hex3 = 0xABC;        // 2748
console.log("0xFF:", hex1);
console.log("0xA:", hex2);
console.log("0xABC:", hex3);

console.log("\n=== 5. BINARY LITERALS (Base 2) ===");
let bin1 = 0b1010;       // 10
let bin2 = 0B1111;       // 15
console.log("0b1010:", bin1);
console.log("0B1111:", bin2);

console.log("\n=== 6. OCTAL LITERALS (Base 8) ===");
let oct1 = 0o17;         // 15
let oct2 = 0O77;         // 63
console.log("0o17:", oct1);
console.log("0O77:", oct2);

console.log("\n=== 7. SEPARATORS (Numeric Separators - ES2021) ===");
let million = 1_000_000;
let binarySep = 0b1010_1111;
let hexSep = 0xFF_FF;
console.log("1_000_000:", million);
console.log("0b1010_1111:", binarySep);
console.log("0xFF_FF:", hexSep);

console.log("\n=== 8. SPECIAL NUMERIC VALUES ===");
console.log("Infinity:", Infinity, "Type:", typeof Infinity);
console.log("-Infinity:", -Infinity);
console.log("NaN (Not a Number):", NaN, "Type:", typeof NaN);

console.log("\n--- How these special values appear ---");
console.log("1 / 0:", 1 / 0);
console.log("-1 / 0:", -1 / 0);
console.log("0 / 0:", 0 / 0);
console.log("'hello' * 2:", "hello" * 2);

console.log("\n=== 9. BIGINT (ES2020) ===");
/*
  BigInt is used for integers larger than Number.MAX_SAFE_INTEGER.
  Append 'n' to the end of an integer, or use BigInt().
  You CANNOT mix BigInt and Number in arithmetic operations.
*/
let big1 = 9007199254740991n;              // Safe integer limit + 1
let big2 = 12345678901234567890123456789n;
let big3 = BigInt(42);
console.log("BigInt 1:", big1, "Type:", typeof big1);
console.log("BigInt 2:", big2);
console.log("BigInt from Number:", big3);

console.log("\n--- BigInt Arithmetic ---");
console.log("big1 + 1n:", big1 + 1n);
// console.log(big1 + 1); // ERROR! Cannot mix BigInt and Number

console.log("\n=== 10. NUMBER OBJECT PROPERTIES ===");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Number.NaN:", Number.NaN);
console.log("Number.EPSILON:", Number.EPSILON);

console.log("\n=== 11. NUMBER METHODS ===");
let num = 123.456;
console.log("num.toFixed(2):", num.toFixed(2));              // "123.46"
console.log("num.toPrecision(4):", num.toPrecision(4));      // "123.5"
console.log("num.toExponential(2):", num.toExponential(2));  // "1.23e+2"
console.log("(255).toString(16):", (255).toString(16));      // "ff"
console.log("(10).toString(2):", (10).toString(2));          // "1010"
console.log("(1000).toLocaleString('en-IN'):", (1000).toLocaleString('en-IN')); // "1,000"

console.log("\n=== 12. GLOBAL PARSING FUNCTIONS ===");
console.log("parseInt('42'):", parseInt("42"));              // 42
console.log("parseInt('FF', 16):", parseInt("FF", 16));      // 255
console.log("parseInt('1010', 2):", parseInt("1010", 2));    // 10
console.log("parseInt('77', 8):", parseInt("77", 8));        // 63
console.log("parseFloat('3.14'):", parseFloat("3.14"));      // 3.14
console.log("parseFloat('3.14abc'):", parseFloat("3.14abc")); // 3.14
console.log("parseInt('abc'):", parseInt("abc"));            // NaN

console.log("\n=== 13. NUMBER STATIC METHODS ===");
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));        // true
console.log("Number.isNaN('NaN'):", Number.isNaN("NaN"));    // false (global isNaN would return true)
console.log("Number.isFinite(100):", Number.isFinite(100));  // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("Number.isInteger(5):", Number.isInteger(5));    // true
console.log("Number.isInteger(5.5):", Number.isInteger(5.5)); // false
console.log("Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991));     // true
console.log("Number.isSafeInteger(9007199254740992):", Number.isSafeInteger(9007199254740992));     // false
console.log("Number.parseInt('42'):", Number.parseInt("42"));     // same as global parseInt
console.log("Number.parseFloat('3.14'):", Number.parseFloat("3.14")); // same as global parseFloat

console.log("\n=== 14. ARITHMETIC OPERATORS ===");
console.log("Addition: 5 + 3 =", 5 + 3);
console.log("Subtraction: 5 - 3 =", 5 - 3);
console.log("Multiplication: 5 * 3 =", 5 * 3);
console.log("Division: 5 / 3 =", 5 / 3);
console.log("Modulus: 5 % 3 =", 5 % 3);
console.log("Exponentiation: 2 ** 3 =", 2 ** 3);
console.log("Increment: let x = 5; x++ =", (() => { let x = 5; return x++; })());
console.log("Decrement: let y = 5; y-- =", (() => { let y = 5; return y--; })());

console.log("\n=== 15. BITWISE OPERATORS (Work on 32-bit integers) ===");
console.log("5 & 1 (AND):", 5 & 1);
console.log("5 | 1 (OR):", 5 | 1);
console.log("5 ^ 1 (XOR):", 5 ^ 1);
console.log("~5 (NOT):", ~5);
console.log("5 << 1 (Left Shift):", 5 << 1);
console.log("5 >> 1 (Right Shift):", 5 >> 1);
console.log("-5 >>> 1 (Unsigned Right Shift):", -5 >>> 1);

console.log("\n=== 16. MATH OBJECT (Common Methods) ===");
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.abs(-10):", Math.abs(-10));
console.log("Math.round(4.5):", Math.round(4.5));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.trunc(4.9):", Math.trunc(4.9));
console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3));
console.log("Math.min(1, 5, 3):", Math.min(1, 5, 3));
console.log("Math.random():", Math.random()); // Random between 0 and 1
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2));
console.log("Math.log(Math.E):", Math.log(Math.E));

console.log("\n=== 17. COMPARISON & EQUALITY ===");
console.log("5 == '5':", 5 == '5');      // true (loose equality)
console.log("5 === '5':", 5 === '5');    // false (strict equality)
console.log("NaN == NaN:", NaN == NaN);  // false (NaN is never equal to itself)
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Object.is(5, '5'):", Object.is(5, '5')); // false
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true (unlike ==)
console.log("Object.is(+0, -0):", Object.is(+0, -0));     // false (unusual case)

console.log("\n=== 18. COMMON PITFALLS ===");
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);  // false! (floating point precision)
console.log("0.1 + 0.2:", 0.1 + 0.2);                  // 0.30000000000000004
console.log("Fix with toFixed:", (0.1 + 0.2).toFixed(2)); // "0.30"

console.log("\n'5' + 3:", '5' + 3);    // "53" (string concatenation)
console.log("'5' - 3:", '5' - 3);      // 2 (numeric subtraction)
console.log("'5' * '3':", '5' * '3');  // 15 (coerced to numbers)

console.log("\n=== 19. CONVERTING TO NUMBER ===");
console.log("Number('42'):", Number("42"));
console.log("Number('3.14'):", Number("3.14"));
console.log("Number(''):", Number(""));
console.log("Number(true):", Number(true));
console.log("Number(false):", Number(false));
console.log("Number(null):", Number(null));
console.log("Number(undefined):", Number(undefined));
console.log("Number('abc'):", Number("abc"));
console.log("+'42':", +"42");           // Unary plus operator
console.log("~~3.14:", ~~3.14);         // Double bitwise NOT (truncates to integer)

console.log("\n=== 20. SUMMARY TABLE ===");
/*
  ┌─────────────────────────────┬──────────────────────────────────────────┐
  │ Type / Format               │ Example                                  │
  ├─────────────────────────────┼──────────────────────────────────────────┤
  │ Decimal Integer             │ 42, -7, 0                                │
  │ Floating Point              │ 3.14, .5, 2.0                            │
  │ Exponential                 │ 1e5, 2.5e-3                              │
  │ Hexadecimal (Base 16)       │ 0xFF, 0xABC                              │
  │ Binary (Base 2)             │ 0b1010, 0B1111                           │
  │ Octal (Base 8)              │ 0o17, 0O77                               │
  │ Numeric Separator           │ 1_000_000, 0xFF_FF                       │
  │ Infinity                    │ Infinity, -Infinity                      │
  │ NaN                         │ NaN                                      │
  │ BigInt                      │ 123n, BigInt(42)                         │
  └─────────────────────────────┴──────────────────────────────────────────┘
*/

console.log("\n=== END OF NUMBER LITERALS GUIDE ===");
