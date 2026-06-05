let str = "  Hello, World!   "

//upperCase
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//trim(), trimStart() and trimEnd()

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());


// replace() -> replaces first occurance of string or a character

let msg = "Test: FAIL. Retry: FAIL."
console.log(msg.replace("FAIL", "PASS"));


let text1 = 'I love Java, JS is Great'
console.log(text1.replace("Java", "JavaScript"));


// replaceAll() -> replaces all occurances

let text2 = 'I love Java, Java is Great, Java changes JS'
console.log(text2.replaceAll("Java", "JavaScript"));


let url = "https://staging.vwo.com/api/login?retry=true/staging"
console.log(url.replace(/staging/, "qa")); // first occurance replace
console.log(url.replace(/staging/g, "qa")); // all occurancs


//split

let mm = "skip, pass, fail".split("|")
console.log(mm);


// join() array method - discussed in strings

let r = "test_login_pass".split("_").join(" ")
console.log(r);


let datee = ["2026","06","04"]
let joined = datee.join("-")
console.log(joined);