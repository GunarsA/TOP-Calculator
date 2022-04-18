const calculator = {
  display: "",
  setupCalculator() {
    const buttonContainer = document.querySelector('#calculator-buttons');
    const buttons = buttonContainer.querySelectorAll('button');
    buttons.forEach((button) => {button.addEventListener('click', 
        function() {
      console.log(this.textContent);
    })});
  }
};

calculator.setupCalculator();