// Given an array and a target sum, find occurance of possible values that gives target sum

export const non_rescursive = (array: number[], targetSum: number) => {
  if (!array || array.length < 1 || !targetSum) {
    return [];
  } else {
    let newArr: number[] = [];
    const rec = (arrayNum) => {
      const valToFindInArray = targetSum - arrayNum;
      console.log('val to find:', valToFindInArray);
      if (array.indexOf(valToFindInArray) != -1 && array.indexOf(arrayNum) != array.indexOf(valToFindInArray)) {
        // before adding make sure that the element is not present
        newArr.indexOf(arrayNum) === -1 ? newArr.push(arrayNum) : () => {};
        newArr.indexOf(valToFindInArray) === -1 ? newArr.push(valToFindInArray) : () => {};
      }
    };
    let count = 0;
    while (count < array.length - 1) {
      rec(array[count]);
      count++;
    }
    return newArr;
  }
};

export const recursive = (array: number[], targetSum: number) => {
  let newArr: number[] = [];
  let index = 0;
  const recursive = (firstNbr: number, secondNbr: number, index) => {
    console.log('first n:', firstNbr, secondNbr, index);
    if (array.indexOf(secondNbr) === array.length - 1) {
      // means its the last element - so new array can be returned
      if (firstNbr + secondNbr === targetSum) {
        newArr.indexOf(firstNbr) === -1 ? newArr.push(firstNbr) : () => {};
        newArr.indexOf(secondNbr) === -1 ? newArr.push(secondNbr) : () => {};
      }
      return;
    } else {
      if (firstNbr + secondNbr === targetSum) {
        newArr.indexOf(firstNbr) === -1 ? newArr.push(firstNbr) : () => {};
        newArr.indexOf(secondNbr) === -1 ? newArr.push(secondNbr) : () => {};
      }
      recursive(array[index + 1], array[index + 2], ++index);
    }
  };

  recursive(array[index], array[index + 1], index);
  return newArr;
};
