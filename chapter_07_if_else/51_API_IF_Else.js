let statusCode = 200

if (statusCode > 200) {
    console.log("Success")
} else if (statusCode > 300) {
    console.log("redirection")
} else if (statusCode > 400) {
    console.log("client error")
} else {
    console.log("server error")
}