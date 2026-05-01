function signalChecker() {
let color = document.getElementById("colorInput").value.toLowerCase();
let message = document.getElementById("message");
if (color === "red") {
    message.innerHTML = "Must Stop🔴";
} else if (color === "yellow") {
    message.innerHTML = "Ready to move🟡";
} else if (color === "green") {
    message.innerHTML = "Move now🟢";
} else {
    message.innerHTML = "Invalid color❌";
}
}