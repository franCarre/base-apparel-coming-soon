// remove when cursor focused
document.getElementById("email").addEventListener("focus", () => {
  document.getElementById("errorMsg").classList.remove("error-msg--show");
  document.getElementById("errorIcon").classList.remove("error-icon--show");
  document.getElementById("form").classList.remove("form--error");
});

function validateEmail() {
  event.preventDefault();
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let email = document.getElementById("email").value;
  if (emailRegex.test(email)) {
  } else {
    document.getElementById("errorMsg").classList.add("error-msg--show");
    document.getElementById("errorIcon").classList.add("error-icon--show");
    document.getElementById("form").classList.add("form--error");
  }
}