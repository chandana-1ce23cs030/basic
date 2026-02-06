let name = "chandana";
let result = "";
for (let i = 0; i < name.length; i++) {
  let charCode = name.charCodeAt(i);

  if (i % 2 === 0) {
    if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(charCode - 32);
    } else {
      result += name[i];
    }
  } else {
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(charCode + 32);
    } else {
      result += name[i];
    }
  }
}
console.log("Original Name:", name);
console.log("Alternate Characters in Capital:", result);
