const calculator= document.querySelector('.calculator');

const keys = calculator.querySelector('.calculator-keys')
 
const display=calculator.querySelector('.calculator-display')
 
keys.addEventListener('click', event =>
{
    if(!event.target.closest('button')) return

    const  key = event.target
    const keyValue=key.textContent;
    const displayvalue = display.textContent;
    const { type }=key.dataset;
    const {previousKeyType} = calculator.dataset;
    if(type === 'number')
    {
        if(displayvalue === '0')
    {
    display.textContent = keyValue;
    }
    else if(previousKeyType === 'operator')
    {
        display.textContent= keyValue;
    }
    else{
        display.textContent = displayvalue + keyValue;
    }
    }
    if(type === 'operator')
    {
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
        operatorKeys.forEach(el => { el.dataset.state = ''})
        key.dataset.state = 'selected'

        calculator.dataset.firstNumber=displayvalue
        calculator.dataset.operator= key.dataset.key;
    }
    if(type === 'equal')
    {
      const firstNumber= parseInt(calculator.dataset.firstNumber);
      const operator=calculator.dataset.operator
      const secondNumber = parseInt(displayvalue);
      var result= ''
      if (operator === 'plus') result=firstNumber + secondNumber;
      if (operator === 'minus') result=firstNumber - secondNumber;
      if (operator === 'times') result=firstNumber * secondNumber;
      if (operator === 'divide') result=firstNumber/secondNumber;
      display.textContent=result;
    }
    calculator.dataset.previousKeyType = type;
    

})