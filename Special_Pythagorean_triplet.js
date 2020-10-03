const searchTriplet = (num, q) => {
  let c;
  let result;
  for (let a = 1; a < num; a++) {
    for (let b = a + 1; b < num; b++) {
      c = num - (a + b)
      if (a ** q + b ** q === c ** q && a + b + c === 1000) {
        result = a * b * c
      }
    }
  }
  console.log(result || "Triplet does note exist")
}

searchTriplet(1000, 2)