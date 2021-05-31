// Remove duplicates from sorted array with no extra space
// Brute_force
export function rm_brute_force(arr: any[]) {
  if (arr && arr.length >= 2) {
    let pointer = 0;
    for (let i = 1; i < arr.length; i++) {
      pointer = i - 1;
      if (i < arr.length) {
        if (arr[pointer] === arr[i]) {
          arr.splice(i, 1);
        }
      }
    }
  }

  return arr;
}
