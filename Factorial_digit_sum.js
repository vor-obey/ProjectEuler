const factorial = num => {
  let d = 1;
  let result = 0;
  for (let i = 2; i <= num; i++) {
    d *= i

  }

  let sumToString = BigInt(d).toString()

  for (let v = 0; v < sumToString.length; v++) {
    result += +sumToString[v]
  }

  console.log(result)

}

factorial(100)

// из-за использования BigInt происходит потеря точности вычисления. Результат не совпадает с сайтом.