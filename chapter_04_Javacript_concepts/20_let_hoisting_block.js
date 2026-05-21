// Let is Block-scoped

let a = "global"

if(true){
    // TDZ for 'a' starts Here
    // console.log(a) -> Reference Error
    let a = "block" // TDZ ends here
    console.log(a)
}