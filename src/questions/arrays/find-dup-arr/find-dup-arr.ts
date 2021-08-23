// Given an array, find all duplicates that exist in an array with time: O(n) and space: O(1)
// Example:  n = 7 and array[] = {1, 2, 3, 6, 3, 6, 1}, o/p: 1, 3, 6
// [4, 3, 1, 3, 1, 3, 6, 6, 4] = all elements

export async function findDupArr(arr: number[]) {
  let newArr = [];
  const size = arr.length;
  for (let i = 0; i < size - 1; i++) {
    for (let j = i + 1; j < size; j++) {
      if (Math.abs(arr[i]) - Math.abs(arr[j]) == 0) {
        if (newArr.indexOf(arr[i]) === -1) {
          newArr.push(arr[i]);
        }
      }
    }
  }
  console.log(newArr);
  return newArr;
}

export async function findDupArrBetterSolution(arr: number[]) {
  let newArr = [];
  let duplicateArr = [];
  const size = arr.length;
  for (let i = 0; i < size; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    } else {
      if (!duplicateArr.includes(arr[i])) {
        duplicateArr.push(arr[i]);
      }
    }
  }
  console.log(newArr);
  console.log(duplicateArr);
}
