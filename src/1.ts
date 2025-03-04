// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to guess the number
console.log("Guess the number!");

// Read the user's input
const userInput = prompt();

// Check if the user's input is equal to the random number
if (userInput === randomNumber) {
  console.log("Correct! The number was " + randomNumber);
} else {
  console.log("Incorrect. The number was " + randomNumber);
}
