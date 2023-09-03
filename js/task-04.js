const counterValueElement = document.getElementById("value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const updateCounter = () => {
  counterValueElement.textContent = counterValue;
};

incrementButton.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

decrementButton.addEventListener("click", () => {
  counterValue--;
  updateCounter();
});

updateCounter();
