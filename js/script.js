const input = document.querySelector("[data-input]");
const btn = document.querySelector("[data-btn]");
const message = document.querySelector("[data-message]");
const regxp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function handleClick(event) {
  event.preventDefault();
  message.classList.remove("correct","incorrect");

  if (input.value.match(regxp)) {
    console.log("correto");
    input.style.border = "2px solid green";

    message.innerText = "Valid Email";
    message.classList.add("correct");
  } else {
    input.style.border = "2px solid hsl(354, 100%, 66%)";
    message.classList.add("incorrect");
    message.innerText = "Please provide a valid email address";
  }
}
btn.addEventListener("click", handleClick);
