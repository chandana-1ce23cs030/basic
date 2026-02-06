function isAnagram(str1, str2) {
  // Remove spaces, convert to lowercase
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();

  if (str1.length !== str2.length) return false;

  // Count characters
  let count = {};
  for (let char of str1) count[char] = (count[char] || 0) + 1;
  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
