// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function cubeAndSum(num) {
  const result = Math.pow(num, 3) + Math.pow(2, 3) + Math.pow(3, 3);
  console.log(`Результат: ${result}`);
}

cubeAndSum(5);