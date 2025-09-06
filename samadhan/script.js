let countValue = 0;

let countDisplay = document.getElementById("count");
let increaseButton = document.getElementById("increase");
let decreaseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");

increaseButton.onclick = function() {
  countValue = countValue + 1;
  countDisplay.textContent = countValue;
};

decreaseButton.onclick = function() {
  countValue = countValue - 1;
  countDisplay.textContent = countValue;
};

resetButton.onclick = function() {
  countValue = 0;
  countDisplay.textContent = countValue;
};

let textBox = document.getElementById("textInput");
let previewText = document.getElementById("preview");

textBox.oninput = function() {
  previewText.textContent = textBox.value;
};