let number = 1212;
let originalNumber = number;
let reversedNumber = 0;
while (number > 0) {
  let digit = number % 10;
  reversedNumber = reversedNumber * 10 + digit;
  number = Math.floor(number / 10);
}
if (originalNumber === reversedNumber) {
  console.log(originalNumber + " is a palindrome.");
} else {
  console.log(originalNumber + " is not a palindrome.");
}
