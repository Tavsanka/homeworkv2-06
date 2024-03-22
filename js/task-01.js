document.addEventListener("DOMContentLoaded", () => {
  // Znajdowanie wszystkich kategorii
  const categories = document.querySelectorAll("#categories .item");
  console.log(`Number of categories: ${categories.length}`);

  // Iteracja przez wszystkie kategorie
  categories.forEach((category) => {
    // Znajdowanie i wypisywanie nazwy kategorii
    const headerText = category.querySelector("h2").textContent;
    console.log(`Category: ${headerText}`);

    // Znajdowanie i wypisywanie liczby elementów w kategorii
    const itemsCount = category.querySelectorAll("ul li").length;
    console.log(`Elements: ${itemsCount}`);
  });
});
