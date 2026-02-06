// Function to calculate factorial
function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

// Calculate the sum of the series
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += factorial(i) / i;
}

console.log("Sum of the series 1!/1 + 2!/2 + ... + 10!/10 =", sum);
