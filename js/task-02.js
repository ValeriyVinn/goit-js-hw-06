const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientsContainerEl = document.querySelector("ul");
const creatUl = ingredients.map((ingridient) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingridient;

  return liEl;
});

console.log(creatUl);

ingridientsContainerEl.append(...creatUl);
