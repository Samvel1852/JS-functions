function sepArraysToOddEven(mainArr) {
  let resArr = [];
  let oddArr = [];
  let evenArr = [];
  for (let i = 0; i < mainArr.length; i++) {
    if (mainArr[i] % 2 === 0) {
      evenArr.push(mainArr[i]);
    } else {
      oddArr.push(mainArr[i]);
    }
  }
  resArr.push(oddArr);
  resArr.push(evenArr);
  return resArr;
}

console.log(sepArraysToOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
