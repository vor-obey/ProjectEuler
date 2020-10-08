function isFifthPowerDigitsNumber(n) {
  let sum = 0;
  let number = n;
  while (number) {
    sum += Math.pow(number % 10, 5);
    number = Math.floor(number/10);
  }
  return sum === n;
}

function fifthPowerDigitNumbersSum(max) {
  let sum = 0;
  while (max-- > 10) {
    if (isFifthPowerDigitsNumber(max)) sum += max;
  }
  return sum;
}

console.log( fifthPowerDigitNumbersSum(1000000) );