// Define an object 'user' with properties name1, age, and city
const user = { name1: "John", age: 30, city: "NYC" }

// object deconstructing

const { name1, age } = user
console.log(name1);
console.log(age);

// Renaming variables -> Keys

const { name1: userName, age: userAge } = user
console.log(userName);
console.log(userAge);


// Default variables
// Destructure 'country' from 'user'; if property doesn't exist, default to "USA"
const { country = "USA" } = user
console.log(country);



// objects inside object

const data = {
    user: {
        name: "Yash", age: 30, address: {
            ad1: "Kundapura",
            ad2: "Bengaluru"
        }
    }
}
console.log(data);
console.log("---------------------------------------------------");
console.log(data.user);
console.log("---------------------------------------------------");
console.log(data.user.name);
console.log("---------------------------------------------------");
console.log(data.user.address);

// destructring address 1 and address2 how?

// Step 1: Deep destructuring in one line
const { user: { address: { ad1, ad2 } } } = data
console.log(ad1);
console.log(ad2);

// Step 2: Step-by-step destructuring (separate variables to avoid redeclaration)
const userAddress = data.user.address
const { ad1: address1, ad2: address2 } = userAddress
console.log(address1);
console.log(address2);