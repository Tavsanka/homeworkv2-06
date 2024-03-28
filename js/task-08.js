const loginForm = document.querySelector("form.login-form");
loginForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const email = ev.target.elements.email.value;
  const password = ev.target.elements.password.value;

  if (!email || !password) {
    alert("Please fill in all fields.");
  } else {
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);

    loginForm.reset();
  }
});
