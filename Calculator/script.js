// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
  
    let currentInput = '';
    let previousInput = '';
    let operation = null;
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
  
        if (value === 'C') {
          currentInput = '';
          previousInput = '';
          operation = null;
          display.textContent = '';
        } else if (value === '=') {
          if (currentInput && previousInput && operation) {
            currentInput = calculate(previousInput, currentInput, operation);
            display.textContent = currentInput;
            previousInput = '';
            operation = null;
          }
        } else if (['+', '-', '*', '/'].includes(value)) {
          if (currentInput) {
            if (previousInput) {
              previousInput = calculate(previousInput, currentInput, operation);
            } else {
              previousInput = currentInput;
            }
            currentInput = '';
            operation = value;
          }
        } else {
          currentInput += value;
          display.textContent = currentInput;
        }
      });
    });
  
    function calculate(a, b, op) {
      a = parseFloat(a);
      b = parseFloat(b);
  
      if (op === '+') return (a + b).toString();
      if (op === '-') return (a - b).toString();
      if (op === '*') return (a * b).toString();
      if (op === '/') return (a / b).toString();
    }
  });
  