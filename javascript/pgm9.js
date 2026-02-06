function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let smallestPrime = null;
let biggestPrime = null;
for (let i = 2; i <= 1000; i++) {
  if (isPrime(i)) {
    if (smallestPrime === null) smallestPrime = i;
    biggestPrime = i;
  }
}
console.log("Smallest prime number within 1000:", smallestPrime);
console.log("Biggest prime number within 1000:", biggestPrime);
