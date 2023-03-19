const input = document.querySelector("#font-size-control");
const textToChange = document.querySelector("#text");

input.addEventListener("input", (event) => {
  textToChange.style.fontSize = `${input.value}px`;
});
