let name = "Chandana";
let maxChar = name[0];

for (let i = 1; i < name.length; i++) {
  if (name.charCodeAt(i) > maxChar.charCodeAt(0)) {
    maxChar = name[i];
  }
}

console.log("Largest ASCII valued character in name:", maxChar);
