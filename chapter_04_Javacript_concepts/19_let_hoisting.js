console.log(score)// ReferenceError: Cannot access 'score' before initialization - TDZ
let score = 100

{
    // TDZ for Score starts here 
    // console.log(score) access before intialization - ReferenceError
    // score = 60 - ReferenceError
    // typeof score - ReferenceError

    let score = 100 // Declaration is reached - TDZ ends here
    console.log(score) // safe to access 100


}