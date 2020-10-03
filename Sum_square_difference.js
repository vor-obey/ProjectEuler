const sumSquare = (num, sqr) => {
  let sumSqr = 0;
  let sumNumb = 0;

  for (let i = 1; i <= num; i++) {
    sumNumb += i;
    sumSqr += i ** sqr;
  }

  console.log(sumNumb ** sqr - sumSqr)
}

sumSquare(100, 2)