function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  let boxesMarkup = "";
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    size += 10;
  }

  boxesContainer.innerHTML += boxesMarkup;
}

function destroyBoxes() {
  document.getElementById("boxes").innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", () => {
  const amount = parseInt(document.getElementById("amount").value, 10);
  createBoxes(amount);
});

document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
