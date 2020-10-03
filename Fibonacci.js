const FibonacciNumbers = (num) => {
  let a = 1;
  let b = 2;
  let result = b

  while (result <= num) {
    let temp = a;
    a = b;
    b = temp + b;

    if (b % 2 === 0) {
      result += b
    }
  }
  console.log(result)
}

FibonacciNumbers(4000000)