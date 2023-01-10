const firstNumber = prompt('Enter the first number');
const secondNumber = prompt('Enter the second number');

const add = +firstNumber + +secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;

alert(`${firstNumber} + ${secondNumber} = ${add}`);
alert(`${firstNumber} - ${secondNumber} = ${sub}`);
alert(`${firstNumber} * ${secondNumber} = ${mult}`);
alert(`${firstNumber} / ${secondNumber} = ${div}`);
