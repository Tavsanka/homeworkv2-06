const slider = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
slider.addEventListener("input", (ev) => {
  const size = slider.value + "px";
  span.style.fontSize = size;
});
