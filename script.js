const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const enquiry = document.getElementById("enquiry");
const support = document.getElementById("support");
const message = document.getElementById("msg");
const check = document.getElementById("check");


function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if(item.value === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        console.log(item);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});
