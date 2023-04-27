function findDigits() {
    let number = prompt('Введите число:');
    // Проверяем, является ли введенное значение числом
    if (isNaN(number)) {
        alert('Вы ввели не число! Попробуйте еще раз.');
    } else {
        // Получаем количество сотен, десятков и единиц
        let ones = number % 10;
        let tens = Math.floor((number / 10) % 10);
        let hundreds = Math.floor((number / 100) % 10);
        // Выводим результат
        console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${ones}`);
    }
  }
  
  findDigits();
  