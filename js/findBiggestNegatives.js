// 14. Write a function, which receives an array as an argument which elements arrays of numbers. Find
// product of biggest negative number of each array. If there is not any negative number, ignore that array.
// Check that items of the given array are arrays.

function findBiggestNegativesProd(inpArr) {
  let negArr = [];
  for (let i = 0; i < inpArr.length; i++) {
    let negNum = -Infinity;
    for (let j = 0; j < inpArr[i].length; j++) {
      if (inpArr[i][j] < 0 && inpArr[i][j] > negNum) {
        negNum = inpArr[i][j];
        negArr.push(inpArr[i][j]);
      }
    }
  }

  if (!inpArr.some((elm) => elm?.length)) {
    return "Invalid Argument";
  } else if (negArr.length === 0) {
    return "No negatives";
  }
  negArr.sort((a, b) => (a > b ? -1 : 1));
  return negArr[0] * negArr[1];
}

console.log(
  findBiggestNegativesProd([
    [2, -9, -3, 0],
    [1, 2],
    [-4, -11, 0],
  ])
);
