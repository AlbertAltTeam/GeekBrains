//Вариант 1

const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 10));
}

const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
const min = Math.min(...arr);
const containsThree = arr.includes(3);

console.log("Массив:", arr);
console.log("Сумма элементов массива:", sum);
console.log("Минимальное число в массиве:", min);
containsThree ?? console.log("Число 3 есть в массиве");

//Вариант 2
const arr2 = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
const sum2 = arr2.reduce((total, number) => total + number);
const minNumber = Math.min.apply(null, arr2);
const hasThree = arr2.indexOf(3) !== -1;

console.log(`Массив: ${arr2}`);
console.log(`Сумма элементов массива: ${sum2}`);
console.log(`Минимальное число в массиве: ${minNumber}`);
console.log(`Число 3 ${hasThree ? 'найдено' : 'не найдено'} в массиве`);