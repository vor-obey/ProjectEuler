const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfPrime(num) {
  let result = 0;
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      result += i;
    }
  }
  console.log(result)
}

sumOfPrime(2000000)