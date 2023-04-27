//вариант 1

let day = 15;
if (day >= 1 && day <= 10) {
   console.log('Первая декада');
} else if (day >= 11 && day <= 20) {
   console.log('Вторая декада');
} else if (day >= 21 && day <= 31) {
   console.log('Третья декада');
} else {
    console.log('Некорректный день месяца');
}


//вариант 2

function decadeNumber(day) {
    if (day >= 1 && day <= 10) {
      return 'Первая декада';
    } else if (day >= 11 && day <= 20) {
      return 'Вторая декада';
    } else if (day >= 21 && day <= 31) {
      return 'Третья декада';
    } else {
      return 'Некорректный день месяца';
    }
  }
  
  console.log(decadeNumber(9)); // Первая декада
  console.log(decadeNumber(15)); // Вторая декада
  console.log(decadeNumber(29)); // Третья декада
  console.log(decadeNumber(32)); // Некорректный день месяца
  