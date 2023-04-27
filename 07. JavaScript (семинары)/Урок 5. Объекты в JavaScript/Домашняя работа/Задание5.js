const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const daysOfWeek = en.reduce((acc, day, index) => {
  acc[day] = ru[index];
  return acc;
}, {});

console.log(daysOfWeek);


const daysOfWeek2 = {};
en.forEach((day, index) => {
  daysOfWeek2[day] = ru[index];
});

console.log(daysOfWeek2);


const daysOfWeek3 = {};
for (let key in en) {
  daysOfWeek3[en[key]] = ru[key];
}

console.log(daysOfWeek3);