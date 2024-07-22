function restrictinput(event) {
  const allowedChars = "0123456789+-*/(). ";
  const key = event.key;

  if (!allowedChars.includes(key) && event.keyCode !== 8 && event.keyCode !== 37 && event.keyCode !== 39 && event.key !== "=" )
  {
    event.preventDefault();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const numberInput = document.getElementById("input");
  const numberButtons = document.querySelectorAll(".button");
  const clearButton = document.getElementById("Clear-All");
  const clear = document.getElementById("clear");
  const calculateButton = document.getElementById("calculate");

  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.value;
      numberInput.value += value;
    });
  });

  calculateButton.addEventListener("click", calculateResult);

  document.addEventListener("keydown", (event) => {
    const inputField = document.getElementById("input");
    inputField.focus();
    if (event.key === "=" || event.key === "Enter") {
      event.preventDefault();
      calculateResult();
    }
  });

  numberInput.addEventListener("focus", () => {
    numberInput.setSelectionRange(numberInput.value.length, numberInput.value.length);
  });

  function calculateResult() {
    try {
      numberInput.value = eval(numberInput.value);
    } catch (error) {
      numberInput.value = "Error";
    }
  }

  clearButton.addEventListener("click", clearAll);

  function clearAll() {
    numberInput.value = "";
  }

  clear.addEventListener("click", clearLast);

  function clearLast() {
    const currentValue = numberInput.value;
    numberInput.value = currentValue.slice(0, -1); // Remove the last character
  }
});
