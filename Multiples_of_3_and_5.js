const multiples = num => {
  let result = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  console.log(result)
}

multiples(1000)