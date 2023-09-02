const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

// const liEl = document.createElement("li");
// const liEl1 = document.createElement("li");
// const liEl2 = document.createElement("li");
// const liEl3 = document.createElement("li");
// const liEl4 = document.createElement("li");
// const liEl5 = document.createElement("li");

// liEl.textContent = "Potatoes";
// liEl1.textContent = "Mushrooms";
// liEl2.textContent = "Garlic";
// liEl3.textContent = "Tomatos";
// liEl4.textContent = "Herbs";
// liEl5.textContent = "Condiments";

// ingredientsList.append(liEl, liEl1, liEl2, liEl3, liEl4, liEl5);

const liEl = `<li class"item">Potatoes</li><li>Mushrooms</li><li>Garlic</li><li>Tomatos</li><li>Herbs</li><li>Condiments</li>`;

ingredientsList.insertAdjacentHTML("beforeend", liEl);

ingredientsList.classList.add("item");
