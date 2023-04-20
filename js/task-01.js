const numberOfCategories = document.querySelectorAll('.item')

console.log(`Number of categories: ${numberOfCategories.length}`)

numberOfCategories.forEach((elem) => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`)
}) 