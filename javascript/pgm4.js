let name = "chandana";
let toggledName = "";
for (let i = 0; i < name.length; i++) {
  let charCode = name.charCodeAt(i);
  if (charCode >= 65 && charCode <= 90) {
    toggledName += String.fromCharCode(charCode + 32);
  } else if (charCode >= 97 && charCode <= 122) {
    toggledName += String.fromCharCode(charCode - 32);
  } else {
    toggledName += name[i];
  }
}
console.log("Original Name:", name);
console.log("Toggled Case Name:", toggledName);
