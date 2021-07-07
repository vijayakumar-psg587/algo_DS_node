export function fibNormal(fibLength: number, fibArr: number[]) {
  if (fibLength < 0) {
    throw new Error(`Fibonacci series cannot be implemented for the number: ${fibLength}`);
  } else {
    if (!fibArr) {
      fibArr = [];
      fibArr.push(1);
    }
    let i = 0;
    while (i < fibLength) {
      if ((i = 1)) {
        fibArr.push(addFunc(fibArr[i - 1], i));
      } else {
        fibArr.push(addFunc(fibArr[i - 1], fibArr[i]));
      }
      i++;
    }
    return fibArr;
  }
}

function addFunc(val1: number, val2: number) {
  const valToReturn = val1 + val2;
  return valToReturn;
}

export function* fibGen() {
  const val1 = 0;
  let val2 = 1;

  // first yield const values
  yield val1;
  yield val2;
  let currentVal = val2;
  let tempYield;
  while (true) {
    tempYield = currentVal + val2;
    yield tempYield;
    val2 = currentVal;
    currentVal = tempYield;
  }
}
