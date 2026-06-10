let config = {}
config.browser = "Chrome"
config.testName = "Login-test"
config.timeOut = 3000

console.log(config)

delete config.browser
console.log(config);

if (config.browser === "Chrome") {
    console.log("Tc will be executed");
}

// We can create like below
// let config1 = {
//     browser: "Chrome",
//     testName: "Login-test",
//     timeOut: 3000
// }