const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")

const checkPassword = function () {
  if(password.value !== confirmPassword.value){
    return confirmPassword.setCustomValidity("Password do not match")
  }
  else confirmPassword.setCustomValidity('')
  }

  password.addEventListener('input', checkPassword);
  confirmPassword.addEventListener('input', checkPassword)

  document.getElementById('password-form').addEventListener('submit', function (event) {
    checkPassword();
    if (confirmPassword.checkValidity() === false) {
      event.preventDefault(); // Prevent form submission if passwords do not match
    }
  });

