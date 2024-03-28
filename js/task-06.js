const input = document.querySelector("#validation-input");
input.addEventListener("blur", (ev) => {
  const requiredLength = input.dataset.length;
  const currentLength = ev.target.value.length.toString();

  if (currentLength === requiredLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
