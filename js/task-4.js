const credits = 23580;
const pricePerDroid = 3000;
let numberOfDroids = prompt(
  'Укажите количество дроидов которые хотите заказать',
);
let totalPrice = pricePerDroid * numberOfDroids;
let change = credits - totalPrice;
let message;
if (message === null) {
  message = 'Отменено пользователем!';
} else if (totalPrice < credits) {
  message = `Вы купили ${numberOfDroids} дроидов, на счету осталось ${change} кредитов.`;
} else {
  message = 'Недостаточно средств на счету!';
}

console.log(message);
