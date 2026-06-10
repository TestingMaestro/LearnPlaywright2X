const user = {
    name: "Pramod",
    age: 43
}

const calculator = {
    value: 0,
    add(n) {
        this.value += n;
    },
    subtract(n) {
        this.value -= n;
    }
}