const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

let categoryCount = 0;

categoryItems.forEach((item) => {
  categoryCount += 1;

  const categoryTitle = item.querySelector("h2");

  const categoryElements = item.querySelectorAll("ul>li");

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});

console.log(`Number of categories: ${categoryCount}`);
