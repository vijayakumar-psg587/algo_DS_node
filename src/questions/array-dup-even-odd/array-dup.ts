// Given an array , duplicates are prsent such that they all appear in even values expect one
//  that appears in odd sequence, find that number -  Find it in time:O(n) Space:O(1)

import { findDupArr } from '../find-dup-arr/find-dup-arr';

// Example give: [4,3,1,3,1,3,6,6,4] Ans: 3

// This using a hasmap we can first map elem to number of occurances and then find the value by mod of 2 not equals to zero
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

// When we XOR all elements, the only one that remains at the end is the element occuring odd number of times
export async function findDupArrOddTimeWithBetterSpaceComplexity(arr: number[]) {
  if (arr && arr.length < 1) {
    return new Error('Cannot work on an empty array');
  } else {
    let valFound = null;
    for (let i = 0; i < arr.length; i++) {
      valFound = valFound ^ arr[i];
    }
    return valFound;
  }
}
