// Give two non empty arrays, find if the second is a subsequence of the prev one
// Ex: arr1 = [1,2,3,4], arr2 = [1,3,4] o/p true

export function subSequenceGreedy(arr1: number[], arr2: number[]) {
  if (arr1 && arr1.length > 1 && arr2 && arr2.length > 1) {
    return null;
  } else {
    return new Error('Either one of the arrays is empty');
  }
}
