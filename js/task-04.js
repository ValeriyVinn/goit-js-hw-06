let counterValue = 0;

const counter = document.querySelector("#value");
const clickButton = document.querySelectorAll("#counter button");

clickButton[0].addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

clickButton[1].addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
