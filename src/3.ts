function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

const numbers = [1, 2, 3, 4, 5];
const randomNumber = getRandomNumber(numbers.length - 1);
console.log(numbers[randomNumber]);
