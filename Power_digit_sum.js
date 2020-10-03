const digitSum = (num, sqr) => {
  let sqrNumber = BigInt(Math.pow(num, sqr)).toString()
  let result = 0;
  for (let i = 0; i < sqrNumber.length; i++) {
    result += Number(sqrNumber[i])
  }
  console.log(result)
}
digitSum(2, 1000)

