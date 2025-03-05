function getRandomTsCode(): string {
  const randomNumber = Math.floor(Math.random() * 10);
  switch (randomNumber) {
    case 1:
      return 'const num1 = 5;';
    case 2:
      return 'const num2 = 10;';
    case 3:
      return 'const num3 = 15;';
    case 4:
      return 'const num4 = 20;';
    case 5:
      return 'const num5 = 25;';
    case 6:
      return 'const num6 = 30;';
    case 7:
      return 'const num7 = 35;';
    case 8:
      return 'const num8 = 40;';
    case 9:
      return 'const num9 = 45;';
    case 10:
      return 'const num10 = 50;';
  }
}
