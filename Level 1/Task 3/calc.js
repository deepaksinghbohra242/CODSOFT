let currentInput = '';
let result = 0;

function clearDisplay() {
    currentInput = '';
    updateDisplay('0');
}

function appendInput(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}

function calculate() {
    try {
        result = eval(currentInput);
        updateDisplay(result);
        currentInput = result.toString();
    } catch (error) {
        updateDisplay('Error');
    }
}
