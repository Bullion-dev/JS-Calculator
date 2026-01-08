//js-calculator
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(5, 10));

function subtract(num1, num2) {
    return num1 - num2;
}
console.log(subtract(10, 5));

function multiply(num1, num2) {
    return num1 * num2;
}   
console.log(multiply(5, 10));

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    return num1 / num2;
}
console.log(divide(10, 5));

function modulus(num1, num2) {
    return num1 % num2;
}   
console.log(modulus(10, 3));

function power(num1, num2) {
    return Math.pow(num1, num2);
}
console.log(power(2, 3));

function squareRoot(num) {
    return Math.sqrt(num);
}
console.log(squareRoot(16));
