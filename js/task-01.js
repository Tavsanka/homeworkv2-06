const categories = document.querySelectorAll(".item");

console.log("Number of categories: " + categories.length);

for (let i = 0; i < categories.length; i++) {
  const category = categories[i];

  const categoryName = category.querySelector("h2").textContent;
  const elements = category.querySelectorAll("li");
  console.log("Category: " + categoryName + "\nElements: " + elements.length);
}
