let daysInYear = 365;
let moonOrbitDays = 27.3;

let rotationsPerYear = daysInYear / moonOrbitDays;

console.log(
  "Number of Earth rotations with respect to Moon per year:",
  rotationsPerYear.toFixed(2)
);
