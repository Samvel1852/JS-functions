// 13. Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all
// elements in the array are unique.

function getPossibleSubsets(inpArr) {
  if (inpArr.length <= 3) {
    return inpArr;
  } else {
    let resArr = [];
    let tempArr = [];
    for (let i = 0; i < inpArr.length - 2; i++) {
      for (let j = i + 1; j < inpArr.length - 1; j++) {
        for (let k = j + 1; k < inpArr.length; k++) {
          resArr.push([inpArr[i], inpArr[j], inpArr[k]]);
        }
      }
    }
    return resArr;
  }
}

console.log(getPossibleSubsets([5, 9, 23, 0, -2, -1]));
