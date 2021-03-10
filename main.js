var email = document.getElementById("email");
var text = document.querySelector(".valid");
var form = document.querySelector(".box");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (email.value === "") {
    text.style.display = "block";
    email.style.borderColor = "red";
  }
});
