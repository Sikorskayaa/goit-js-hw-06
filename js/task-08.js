const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (emailValue.trim() === "" || passwordValue.trim() === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData);

    loginForm.reset();
  }
});
