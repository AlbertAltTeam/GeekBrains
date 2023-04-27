function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a > b ? a - b : 0;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


console.log(sum(2, 6)); // 8
console.log(subtract(10, 3)); // 7
console.log(multiply(4, 5)); // 20
console.log(divide(15, 3)); // 5
