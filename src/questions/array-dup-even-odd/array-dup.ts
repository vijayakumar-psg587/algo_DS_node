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
    const arrMap: Map<number, number> = new Map<number, number>();
    arr.forEach((val, idx) => {
      if (arrMap.size === 0 || !arrMap.has(val)) {
        arrMap.set(val, 1);
      } else if (arrMap.has(val)) {
        const numberOfOccurances = arrMap.get(val) + 1;
        arrMap.set(val, numberOfOccurances);
      }
    });
    console.log('arrMap:', arrMap);
    let valFound = null;
    arrMap.forEach((val, key) => {
      console.log('', key, val, val % 2);
      if (val % 2 > 0) {
        valFound = key;
      }
    });
    return valFound;
  }
}
