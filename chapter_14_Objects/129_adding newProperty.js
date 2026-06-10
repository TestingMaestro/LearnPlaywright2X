let person = { name: "Yashodhar" }

// adding new property
person.age = 30
person.phnNo = 9876543210
console.log(person);

//update existing
person.age = "33"
console.log(person);

// deleting existing property
delete person.age
console.log(person);
