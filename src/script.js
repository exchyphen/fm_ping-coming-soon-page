const notifyButton = document.getElementById("notify-button");
const errorMessage = document.getElementById("error-message");
const emailInput = document.getElementById("email");

const notifyAction = (err) => {
  err.preventDefault();

  // check if valid email
  if (!isEmail(emailInput.value)) {
    errorMessage.style.display = "block";
    emailInput.style.border = "1px solid var(--light-red)";
  } else {
    errorMessage.style.display = "none";
    emailInput.style.border = "1px solid var(--gray)";
  }
};

notifyButton.addEventListener("click", notifyAction);

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}
