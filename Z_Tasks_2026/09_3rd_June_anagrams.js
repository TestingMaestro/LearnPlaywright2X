let s = "tea"
let t = "eat"

let len1 = s.length
let len2 = t.length

let sToLower = s.toLowerCase()
let tToLower = t.toLowerCase()

let sSorted = sToLower.split("").sort().join("")
let tSorted = tToLower.split("").sort().join("")
//split -> [ 'l', 'i', 's', 't', 'e', 'n' ]
//sort -> [ 'e', 'i', 'l', 'n', 's', 't' ]
//join -> eilnst

console.log(`Sorted S String --> "${sSorted}"`)
console.log(`Sorted T String --> "${sSorted}"`)


if (len1 === len2) {
    let bool = true
    for (let i = 0; i < sSorted.length; i++) {

        if (sSorted[i].charAt(0) !== tSorted[i].charAt(0)) {
            bool = false
        }
    }
    if (!bool) {
        console.log("Not an Anagram");
    } else console.log("Anagram");
} else console.log("Length missmatch!! Try again");
