const submitButton = document.querySelector("#submit-button");
const errorMessage = document.querySelector(".error-message");
const email = document.querySelector("#email");

submitButton.addEventListener("click", validate);

function validate(err) {
  err.preventDefault();

  if (!isEmail(email.value)) {
    errorMessage.style.display = "block";
    email.style.border = "1px solid var(--s-light-red)";
  } else {
    errorMessage.style.display = "none";
    email.style.border = "1px solid var(--n-gray)";
  }
}

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}
