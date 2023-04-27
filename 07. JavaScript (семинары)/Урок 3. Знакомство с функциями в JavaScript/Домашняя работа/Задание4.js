function sum(a, b) {
    return a + b;
}

function difference(a, b) {
    return a === b ? 0 : a > b ? a - b : b - a;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b === 0 ? 0 : a / b;
}

console.log(sum(2, 6)); // 8
console.log(difference(3, 3)); // 0
console.log(difference(5, 3)); // 2
console.log(difference(10, 20)); // 10
console.log(multiply(2, 6)); // 12
console.log(divide(6, 2)); // 3
console.log(divide(6, 0)); // 0