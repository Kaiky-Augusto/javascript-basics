let count = 0;

const value = document.getElementById("value");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", function () {
  count++;
  updateValue();
});

decreaseBtn.addEventListener("click", function () {
  count--;
  updateValue();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateValue();
});

function updateValue() {
  value.textContent = count;
}