function Factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

function LatticePath(num) {
return Factorial(num*2) / Factorial(num) / Factorial(num)
}

console.log(LatticePath(2))