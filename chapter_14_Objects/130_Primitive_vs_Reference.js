let a = 10
let b = a
b = 99
console.log(b);
console.log(a);

// Change in the value will impact both reference var which is holding addresses
let obj1 = { value: 1 }
let obj2 = obj1
obj2.value = 88
console.log(obj1.value);
console.log(obj2.value);
