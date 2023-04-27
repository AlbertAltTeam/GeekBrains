const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 10));
}

const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

const min = Math.min(...arr);

const containsThree = arr.includes(3);

console.log(`Массив: ${arr}`);
console.log(`Сумма элементов массива: ${sum}`);
console.log(`Минимальное число в массиве: ${min}`);
containsThree ? console.log("Число 3 есть в массиве") : console.log("Число 3 отсутствует в массиве");