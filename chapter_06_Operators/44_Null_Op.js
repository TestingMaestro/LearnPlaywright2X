console.log(null >= 0) // true
console.log(null == 0) // false

// if values = null or undefined then it becomes nullish, other than that not nullish

// Nullish ->
let amul = null
let res1 = amul ?? "default"
console.log(res1) //default

let amul1 = undefined
let res2 = amul1 ?? "default"
console.log(res2)// default

let amul3 = ""
let res3 = amul3 ?? "default"
console.log(res3) // "" not nullish


let amul4 = 0
let res4 = amul4 ?? "default"
console.log(res4)//0 -> not nullish