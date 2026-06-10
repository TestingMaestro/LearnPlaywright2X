let std1 = { name: "Yash", age: 34 }
let std2 = { name: "sou" }
let std3 = { name: "Pramod", age: 54, phNo: 987654321 }


let abc = { status: "In Progress" }
console.log(abc.status);
// console.log(abc["status"]); // fixed or static

let bcd = abc;
console.log(bcd.status)

bcd.status = "Failed"
console.log(bcd)
console.log(abc)



