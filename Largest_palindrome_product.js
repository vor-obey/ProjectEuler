const largestPalindrome = num => {
  let n = num;
  let c;
  let result = [];

  for (let i = n; i >= 100; i--) {

    for (let j = num; j >= 100; j--) {

      c = String(i * j)
      let rev = Array(c)[0].split("").reverse().join("");

      if (c === rev) {
        result.push(Number(c));
        break;
      }
    }
  }

  console.log(Math.max(...result))

}

largestPalindrome(999);