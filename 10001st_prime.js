const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const positionNumber = (num) => {
  let count = 0;
  let result = 2;
  while (count < num) {
    if (isPrime(result)) {
      count++;
    }
    result++
  }
  console.log(result - 1);
}

positionNumber(10001)

