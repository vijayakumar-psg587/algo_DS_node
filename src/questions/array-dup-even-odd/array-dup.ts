// Given an array , duplicates are prsent such that they all appear in even values expect one
//  that appears in odd sequence, find that number -  Find it in time:O(n) Space:O(1)
// Example give: [4,3,1,3,1,3,6,6,4] Ans: 3
export async function findOddDuplicateItem(arr: number[]) {
  if (arr && arr.length < 1) {
    return new Error('Cannot work on an empty array');
  } else {
    let odd = undefined;
    const arrOfArr: [number[]] = [[]];
    arr.forEach((elem, idx) => {
      arrOfArr.push(arr.filter((val) => (elem ^ val) === 0));
    });

    return arrOfArr.filter((arr) => arr.length % 2 != 0)[0][0];
  }
}

export async function findOddDuplicateItemWithOofN(arr: number[]) {
  if (arr && arr.length < 1) {
    return new Error('Cannot work on an empty array');
  } else {
    console.log(arr.filter((val) => arr.findIndex((valueOfIndex) => (valueOfIndex >> 1) % val) != 0));
  }
}
