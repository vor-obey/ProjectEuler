let longAddition = function(arrA, arrB) {
  let result = [];
  let maxI = Math.max(arrA.length, arrB.length);
  for (let i = 0; i < maxI; i++) {
    result[i] = (arrA[i] || 0) + (arrB[i] || 0) + (result[i] || 0);
    if (result[i] >= 10) {
      result[i] %= 10;
      result[i+1] = 1;
    }
  }
  return result;
};

let firstFibonacciTermWithNDigits = function(n) {
  let a = [1];
  let b = [1];
  let c;

  for (let i = 2; b.length < n; i++) {
    c = longAddition(a, b);
    a = b;
    b = c;
  }

  return i;
};

console.log(firstFibonacciTermWithNDigits(1000));