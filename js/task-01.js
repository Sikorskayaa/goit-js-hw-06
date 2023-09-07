const categories = document.querySelectorAll(".item");
const numberOfCategories = categories.length;

console.log("Number of categories:", numberOfCategories);
console.log(" ");

categories.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
  console.log(" ");
});
