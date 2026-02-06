function isArmstrong(num) {
  let sum = 0;
  let strNum = num.toString();
  let n = strNum.length;
  for (let digit of strNum) {
    sum += Math.pow(parseInt(digit), n);
  }
  return sum === num;
}

console.log(
  "Numbers between 1 and 100 that are perfect squares and Armstrong:"
);
for (let i = 1; i <= 100; i++) {
  if (Math.sqrt(i) % 1 === 0 && isArmstrong(i)) {
    console.log(i);
  }
}
