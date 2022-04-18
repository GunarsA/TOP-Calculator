const calculator = {
  totalNumber: null,
  currentNumber: null,
  currentOperator: null,
  dotPressed: false,
  setupCalculator() {
    const buttonContainer = document.querySelector('#calculator-buttons');
    const buttons = buttonContainer.querySelectorAll('button');
    buttons.forEach((button) => {button.addEventListener('click', 
        function() {
      console.log(this.textContent);

      const displayBox = document.querySelector('#calculator-display');

      if(this.classList.contains('digit')) {
          if(calculator.currentNumber) {
            calculator.currentNumber *= 10;
            calculator.currentNumber += parseInt(this.textContent);
          }
          else {
            calculator.currentNumber = parseInt(this.textContent);
          }
          displayBox.textContent = calculator.currentNumber;
      }

      if(this.classList.contains('operator')) {
        calculator.addOperatorFocus(this.textContent);

        if(calculator.currentOperator) {
          switch(calculator.currentOperator) {
            case '*': calculator.totalNumber *= calculator.currentNumber; break;
            case '/': calculator.totalNumber /= calculator.currentNumber; break;
            case '+': calculator.totalNumber += calculator.currentNumber; break;
            case '-': calculator.totalNumber -= calculator.currentNumber; break;
          }
          console.log(calculator.totalNumber);
          displayBox.textContent = calculator.totalNumber;
          calculator.currentOperator = this.textContent;
        }
        else {
          calculator.totalNumber = calculator.currentNumber;
        }
        calculator.currentNumber = null;
        calculator.currentOperator = this.textContent;
        displayBox.textContent = calculator.totalNumber;
      }
    })});
  },
  addOperatorFocus(focusOperator) {
    const operators = document.querySelectorAll('.operator');
    operators.forEach((operator) => {
      if(operator.textContent === focusOperator) {
        operator.style.backgroundColor = 'aqua';
      }
      else {
        operator.style.backgroundColor = ''
      }
    });
  }
};

calculator.setupCalculator();