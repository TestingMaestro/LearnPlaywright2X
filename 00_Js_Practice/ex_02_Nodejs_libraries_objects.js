const process = require("node:process")

// To check which OS we are using
console.log("OS we are using is: ", process.platform);

// Every OS  has the architecture
console.log("Architecture of OS", process.arch);

//Which Node.js version we are using
console.log("Node.js Version", process.version);