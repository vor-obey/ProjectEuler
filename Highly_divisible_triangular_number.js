const triangularNumber = (n) => {
  let i = 1;
  let triangleNumber = 0;

  while (true) {
    triangleNumber += i;
    const length = getDivisorLength(triangleNumber)
    if (length > n) {
      return triangleNumber;
    }
    i++
  }
}

function getDivisorLength(number) {
  let length = 0;
  for (let i = 1; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      length += 2
    }
  }
  return length + 1;
}

console.log(triangularNumber(500))