let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i * 2;
}
let binarySum = "";
let temp = sum;

while (temp > 0) {
  binarySum = (temp % 2) + binarySum;
  temp = Math.floor(temp / 2);
}

console.log("Sum of first 10 even numbers:", sum);
console.log("Binary representation:", binarySum);
