function swapFirstLast(arr) {
  if (arr.length >= 2) {
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
}

let numbers = [10, 20, 30, 40, 50];
console.log("Original array:", numbers);
console.log("After swapping:", swapFirstLast(numbers));
