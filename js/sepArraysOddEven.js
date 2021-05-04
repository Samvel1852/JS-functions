// 1. Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

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
