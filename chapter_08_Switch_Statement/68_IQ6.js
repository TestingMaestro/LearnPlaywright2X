let status = 0;
console.log(typeof status)
switch (status) { // Switch uses === strict comparision where it checks bothe value and a data type
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}