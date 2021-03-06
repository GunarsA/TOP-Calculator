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
        if(calculator.dotPressed) {
          calculator.currentNumber += this.textContent;
        }
        else {
          if(calculator.currentNumber) {
            calculator.currentNumber *= 10;
            calculator.currentNumber += parseInt(this.textContent);
          }
          else {
            calculator.currentNumber = parseInt(this.textContent);
          }
        }
        displayBox.textContent = calculator.currentNumber;
      }

      if(this.classList.contains('dot') && !calculator.dotPressed) {
        calculator.toggleDotFocus();
        if(calculator.currentNumber) {
          calculator.currentNumber += '.';
        }
        else {
          calculator.currentNumber = '0.';
        }
        displayBox.textContent = calculator.currentNumber;
      }

      if(this.classList.contains('operator')) {
        calculator.addOperatorFocus(this.textContent);

        if(calculator.currentOperator) {
          switch(calculator.currentOperator) {
            case '*': 
              calculator.totalNumber *= +calculator.currentNumber; break;
            case '/' :
              calculator.totalNumber /= +calculator.currentNumber; break;
            case '+': 
              calculator.totalNumber = +calculator.totalNumber + +calculator.currentNumber; break;
            case '-': 
              calculator.totalNumber -= +calculator.currentNumber; break;
          }
          console.log(calculator.totalNumber);
          calculator.currentOperator = this.textContent;
        }
        else {
          calculator.totalNumber = calculator.currentNumber;
        }
        if(calculator.dotPressed) {
          calculator.toggleDotFocus();
        }
        calculator.currentNumber = "";
        calculator.currentOperator = this.textContent;
        displayBox.textContent = Math.round(calculator.totalNumber * 100) / 100;
      }

      if(this.textContent === 'AC') {
        if(calculator.dotPressed) {
          calculator.toggleDotFocus();
        }
        calculator.addOperatorFocus();
        calculator.currentNumber = null;
        calculator.currentOperator = null;
        calculator.totalNumber = null;
        displayBox.textContent = "";
      }

      if(this.textContent === '???') {
        calculator.currentNumber = (String(calculator.currentNumber).length == 0 ? 
            "" :
            (String(calculator.currentNumber).substring(0, 
                String(calculator.currentNumber).length - 1)));

        displayBox.textContent = calculator.currentNumber;
      }
    })});
    
    document.addEventListener('keyup', function(event) {
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        switch(event.key) {
          case '1': 
            if(button.textContent === '1') {
              button.click();
            }
            break;
          case '2': 
            if(button.textContent === '2') {
              button.click();
            }
            break;
          case '3': 
            if(button.textContent === '3') {
              button.click();
            }
            break;
          case '4': 
            if(button.textContent === '4') {
              button.click();
            }
            break;
          case '5': 
            if(button.textContent === '5') {
              button.click();
            }
            break;
          case '6': 
            if(button.textContent === '6') {
              button.click();
            }
            break;
          case '7': 
            if(button.textContent === '7') {
              button.click();
            }
            break;
          case '8': 
            if(button.textContent === '8') {
              button.click();
            }
            break;
          case '9': 
            if(button.textContent === '9') {
              button.click();
            }
            break;
          case '*': 
            if(button.textContent === '*') {
              button.click();
            }
            break;
          case '/': 
            if(button.textContent === '/') {
              button.click();
            }
            break;
          case '-': 
            if(button.textContent === '-') {
              button.click();
            }
            break;
          case '+': 
            if(button.textContent === '+') {
              button.click();
            }
            break;
          case 'Enter':
            if(button.textContent === '=') {
              button.click();
            }
            break;
          case 'Backspace':
            if(button.textContent === '???') {
              button.click();
            }
            break;
        }
      });
    });
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
  },
  toggleDotFocus() {
    const dotButton = document.querySelector('.dot');
    dotButton.style.opacity = (dotButton.style.opacity ? '' : '0.25');
    calculator.dotPressed = !calculator.dotPressed;
  }
};

calculator.setupCalculator();