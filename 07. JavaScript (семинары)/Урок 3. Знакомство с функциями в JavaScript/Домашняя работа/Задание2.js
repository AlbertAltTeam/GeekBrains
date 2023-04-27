function calculateSalary() {
    const input = prompt('Введите число:');
    
    if (isNaN(input)) {
      console.log('Значение задано неверно');
    } else {
      const taxRate = 13;
      const salary = Number(input) * (1 - taxRate / 100); // умножаем на коэффициент (1 - 13/100) для получения зарплаты с вычетом налогов 13%
      console.log(`Размер заработной платы за вычетом налогов (${taxRate}%) равен ${salary}`);
    }
  }
  
  calculateSalary();