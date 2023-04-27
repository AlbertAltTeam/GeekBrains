const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};

const result = Object.values(numbers).filter(value => value >= 3);

console.log(result);


const filteredNumbers = [];

for (const key in numbers) {
  if (numbers.hasOwnProperty(key)) {
    const value = numbers[key];
    if (value >= 3) {
      filteredNumbers.push(value);
    }
  }
}

console.log(filteredNumbers);

const filteredNumbers2 = Object.entries(numbers).reduce((acc, [key, value]) => {
  if (value >= 3) {
    acc.push(value);
  }
  return acc;
}, []);

console.log(filteredNumbers2);