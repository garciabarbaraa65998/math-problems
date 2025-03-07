// Generate a random math problem and solution
function getRandomMathProblem() {
  const numbers = [1, 2, 3, 4, 5];
  const operators = ["+", "-", "*", "/"];

  // Get two random numbers and an operator
  const num1 = numbers[Math.floor(Math.random() * numbers.length)];
  const num2 = numbers[Math.floor(Math.random() * numbers.length)];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  // Generate the math problem
  let problem;
  if (operator === "+") {
    problem = `${num1} + ${num2}`;
  } else if (operator === "-") {
    problem = `${num1} - ${num2}`;
  } else if (operator === "*") {
    problem = `${num1} * ${num2}`;
  } else if (operator === "/") {
    problem = `${num1} / ${num2}`;
  }

  // Generate the solution
  let solution;
  if (operator === "+") {
    solution = num1 + num2;
  } else if (operator === "-") {
    solution = num1 - num2;
  } else if (operator === "*") {
    solution = num1 * num2;
  } else if (operator === "/") {
    solution = num1 / num2;
  }

  return [problem, solution];
}
