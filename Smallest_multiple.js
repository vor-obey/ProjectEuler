function smallestMultiple(n) {
  let num = n;

  function checkNum(num) {
    for (let j = 1; j <= n; j++) {
      if (num % j !== 0) {
        return false;
      }
    }
    return true;
  }

  while (checkNum(num) === false) {
    num += n;
  }
  console.log(num);
}

smallestMultiple(20)