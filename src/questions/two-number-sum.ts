export function twoNumberSum(array: number[], targetSum: number) {
  let resultArray: number[];
  if (!array || array.length < 1 || !targetSum) {
    resultArray = [];
  } else {
    let obj = {};
    array.sort((a, b) => {
      return a - b;
    });
    console.log(array);

    // first do this
    resultArray = [];
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === targetSum) {
          if (resultArray.includes(array[i])) {
            resultArray.push(array[j]);
          } else {
            resultArray.push(...[array[i], array[j]]);
          }
        }
      }
    }
  }
  return resultArray;
}

export const twoNumberSum_Oofn = (array: number[], targetSum: number) => {
  let resultArray: number[] = [];

  if (!array || array.length < 1 || !targetSum) {
    resultArray = [];
  } else {
    array.forEach((item, index) => {
      const tempVal = targetSum - item;
      if (array.includes(tempVal) && tempVal != item) {
        resultArray.push(...[item, tempVal]);
      }
    });
  }
  return Array.from(new Set(resultArray));
};
