const display = document.getElementById("display");
const numbers = document.getElementById("numbers");
let currentInput = "";

numbers.addEventListener("click", function (e) {
    const clickedValue = e.target.textContent;

    if (clickedValue === "=") {
        try {
            currentInput = eval(currentInput);
            display.textContent = currentInput;
        } catch (error) {
            display.textContent = "Error";
        }
    } else if (clickedValue === "C") {
        currentInput = "";
        display.textContent = "";
    } else {
        currentInput += clickedValue;
        display.textContent = currentInput;
    }
});

