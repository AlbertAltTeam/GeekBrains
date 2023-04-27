function findMax(num1, num2, num3) {
    let maxNum = num1;

    if (num2 > maxNum) {
        maxNum = num2;
    }

    if (num3 > maxNum) {
        maxNum = num3;
    }

    return maxNum;
}

let num1 = Number(prompt('Введите первое число:'));
let num2 = Number(prompt('Введите второе число:'));
let num3 = Number(prompt('Введите третье число:'));

let max = findMax(num1, num2, num3);

console.log(`Максимальное число: ${max}`);