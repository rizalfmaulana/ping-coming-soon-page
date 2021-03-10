var email = document.getElementById("email");
var text = document.querySelector(".valid");
var form = document.querySelector(".box");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (email.value === "") {
    text.style.display = "block";
    email.style.borderColor = "red";
  }
});
