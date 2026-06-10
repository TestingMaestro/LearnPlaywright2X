const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);

// Dynamic property access

let key = "age"
console.log(user[key]);

key = "email"
console.log(user[key]);


//add or modifying properties
user.city = "NYC" //add
user.age = 32 // modify
console.log(user)


// info of object

let obj = { name: "login" }
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
