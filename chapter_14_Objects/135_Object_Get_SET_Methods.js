const user = {
    firstName: "Yash",
    lastName: "Karki",
    get fullName(){
        return this.firstName + this.lastName
    },
    set fullName(value){
        [this.firstName, this.lastName] = value.split(" ")
    }
}
console.log(user.fullName)
user.fullName = "Sou karki"
console.log(user.fullName)