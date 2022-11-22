const action = prompt('What do you want to do?');

const firstNumber = prompt('Enter the first number');
const secondNumber = prompt('Enter the second number');

const add = +firstNumber + +secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;

switch (action) {
    case 'add':
        alert(`${firstNumber} + ${secondNumber} = ${add}`);
        break;
    case 'sub':
        alert(`${firstNumber} - ${secondNumber} = ${sub}`);
        break;
    case 'mult':
        alert(`${firstNumber} * ${secondNumber} = ${mult}`);
        break;
    case 'div':
        alert(`${firstNumber} / ${secondNumber} = ${div}`);
        break;
    default:
        alert (`OK, bye!`);
}
