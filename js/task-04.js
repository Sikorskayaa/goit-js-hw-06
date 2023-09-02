const counterValueElement = document.getElementById("value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

// Function to update the counter value and the interface
const updateCounter = () => {
  counterValueElement.textContent = counterValue;
};

// Add click event listeners to the buttons
incrementButton.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

decrementButton.addEventListener("click", () => {
  counterValue--;
  updateCounter();
});

// Initial update of the interface
updateCounter();
