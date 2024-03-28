const input = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);
input.addEventListener(`input`, (ev) => {
  const value = ev.target.value;
  output.textContent = value === `` ? `Anonymous` : value;
});
