const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const enquiry = document.getElementById("enquiry");
const support = document.getElementById("support");
const message = document.getElementById("message");
const check = document.getElementById("check");

function showMessage() {
    alert(message)
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if(item.value === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
    }
}

form.addEventListener("submit", (e) => {
    // e.preventDefault();
    console.log("inside fun")
    checkInputs();
    showMessage()
});
