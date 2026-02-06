// Function to calculate factorial
function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
function nCr(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}
let n = 20;
let r = 2;
console.log(`C(${n},${r}) =`, nCr(n, r));
