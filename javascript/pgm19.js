function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}

console.log("Perfect numbers between 1 and 100:");
for (let i = 1; i <= 100; i++) {
  if (isPerfect(i)) console.log(i);
}
