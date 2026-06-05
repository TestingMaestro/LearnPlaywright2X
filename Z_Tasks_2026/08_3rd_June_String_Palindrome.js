let fname = "yay"
let fnameUp = fname.toLowerCase()
let flag = true
let length = fname.length
for (let i = 0; i < fnameUp.length; i++)
{
    if(fnameUp[i].charAt(0) !== fnameUp.charAt(fnameUp.length-i-1)){
        flag = false
 
    }   
}
if(!flag){
    console.log("String is not Palindrome");
}else console.log("string is palindrome");