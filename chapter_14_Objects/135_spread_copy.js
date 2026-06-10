// ============================================================
// Spread Operator (...)
// ============================================================
// The '...' (three dots) is called the SPREAD OPERATOR.
// It spreads (extracts) all properties from an object/array
// into a new object/array.
//
// Use cases:
// 1. Copy an object (shallow copy)
// 2. Merge multiple objects
// 3. Add new properties while copying
// ============================================================

const obj1 = { a: 1, b: 2 }
const copy = { ...obj1 }
console.log(copy);

const obj2 = { c: 3, d: 4 }
const merged = { ...obj1, ...obj2 }
console.log(merged);