function pascalTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      row.push(factorial(i) / (factorial(j) * factorial(i - j)));
    }
    console.log(row.join(" "));
  }
}

// Helper factorial function
function factorial(num) {
  let f = 1;
  for (let i = 2; i <= num; i++) f *= i;
  return f;
}

pascalTriangle(5);
