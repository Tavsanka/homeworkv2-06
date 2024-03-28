// script.js
// Inicjalizacja zmiennej counterValue
let counterValue = 0;

// Funkcja aktualizująca wartość licznika w interfejsie
function updateCounterDisplay() {
  document.getElementById("value").textContent = counterValue;
}

// Funkcja obsługująca kliknięcie przycisku decrement
function decrementCounter() {
  counterValue -= 1;
  updateCounterDisplay();
}

// Funkcja obsługująca kliknięcie przycisku increment
function incrementCounter() {
  counterValue += 1;
  updateCounterDisplay();
}

// Dodanie nasłuchiwaczy do przycisków
document
  .querySelector('[data-action="decrement"]')
  .addEventListener("click", decrementCounter);
document
  .querySelector('[data-action="increment"]')
  .addEventListener("click", incrementCounter);
