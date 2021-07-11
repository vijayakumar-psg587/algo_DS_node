export const array_union = (arr1: Array<unknown>, arr2: Array<unknown>) => {
  if (typeof arr1 === typeof arr2) {
    // proceed further
    if (typeof arr1 === 'object') {
      const newArr = [];
      //first get all values from arr1;
      newArr.push(...arr1);

      // newArr.push(...arr2)
      console.log(newArr);
      console.log(newArr);
      let filterArr = [];
      newArr.forEach((item) => {
        filterArr.push(...compareObj(item, arr2));
      });
      console.log(filterArr);
    }
  } else {
    throw new Error('Two arrays are of different type and they cannot be compared');
  }
};

const compareObj = (objToCompare, arr: Array<unknown>) => {
  const item = arr.filter((item) => item['subBu'] === objToCompare['subBu']);
  if (item) {
    return item;
  } else {
    [];
  }
};
