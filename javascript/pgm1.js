let name = "chandana";

let alternateLetters = "";

for (let i = 0; i < name.length; i++) {
  if (i % 2 === 0) {
    alternateLetters += name[i];
  }
}

console.log("Alternate letters in the name:", alternateLetters);
