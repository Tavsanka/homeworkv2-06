const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Znajdź element listy na stronie.
const list = document.querySelector("#ingredients");

// Utwórz fragment dokumentu, który posłuży jako tymczasowy kontener dla elementów <li>.
const listFragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  // Dla każdego elementu tablicy utwórz nowy element <li>.
  const listItem = document.createElement("li");

  // Ustaw tekst elementu <li> na aktualny składnik.
  listItem.textContent = ingredient;

  // Dodaj klasę 'item' do elementu <li>.
  listItem.classList.add("item");

  // Dodaj element <li> do fragmentu dokumentu.
  listFragment.append(listItem);
});

// Dodaj wszystkie elementy <li> do listy <ul> za pomocą jednej operacji.
list.append(listFragment);
