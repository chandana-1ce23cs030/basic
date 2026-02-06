let number = 58392;
let biggest = 0;

while (number > 0) {
  let digit = number % 10;
  if (digit > biggest) {
    biggest = digit;
  }
  number = Math.floor(number / 10);
}

console.log("The biggest digit is: " + biggest);
