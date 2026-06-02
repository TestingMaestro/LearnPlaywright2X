let browser = "Firefox"

switch (browser) {

    case "Edge":
    case "Chrome":
    case "Brave":
    case "Opera":
        console.log("Chromium Project")
        break;
    case "Firefox":
        console.log("Mozilla Project")
        break;
    case "Safari":
        console.log("Apple Browser -  Uses JS core engine")
        break;
    default:
        console.log("Unknown Browser - Manual Testing is Required")
}