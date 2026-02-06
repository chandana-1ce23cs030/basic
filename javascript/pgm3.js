let name = "Chandana";
let lowerName = name.toLowerCase();
let vowelCount = 0;
for (let i = 0; i < lowerName.length; i++) {
  if (
    lowerName[i] === "a" ||
    lowerName[i] === "e" ||
    lowerName[i] === "i" ||
    lowerName[i] === "o" ||
    lowerName[i] === "u"
  ) {
    vowelCount++;
  }
}
console.log("Number of vowels in the name:", vowelCount);
