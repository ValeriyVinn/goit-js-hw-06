// ? ======= 1 варіант ========================================

// const numberOfCategories = document.querySelectorAll(".item");

// console.log(`Number of categories: ${numberOfCategories.length}`);

// numberOfCategories.forEach((elem) => {
//   console.log(`Category: ${elem.firstElementChild.textContent}`);
//   console.log(`Elements: ${elem.lastElementChild.children.length}`);
// });


// ? ======= 2 варіант ========================================

// const liQuantity = document.querySelectorAll(".item");

// console.log(`Number of categoties: ${liQuantity.length}`);
 
// Array.from(liQuantity).map((elem) => {
//   console.log(`Category: ${elem.firstElementChild.textContent}`)
//   console.log(`Elements: ${elem.lastElementChild.children.length}`);
// });

// ? ======= 3 варіант ========================================

const liQuantity = document.querySelectorAll(".item");

console.log(`Number of categoties: ${liQuantity.length}`);

[...liQuantity].map((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`)
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});