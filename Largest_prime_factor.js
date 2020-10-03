const isPrime = n => {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const primeFactor = num => {
  let result;
  for (let i = 2; i < num; i++) {
    if (isPrime(i) && num % i === 0) {
      result = i;
    }
  }
  console.log(result)
}

primeFactor(600851475143)