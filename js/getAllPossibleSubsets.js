// 13. Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all
// elements in the array are unique.

function getPossibleSubsets(inpArr) {
  if (inpArr.length <= 3) {
    return inpArr;
  } else {
    let resArr = [];
    let tempArr = [];
    for (let i = 0; i < inpArr.length; i++) {
      for (let j = 0; j < inpArr.length; j++) {
        for (let k = 0; k < inpArr.length; k++) {
          if (tempArr.length < 3) {
            if (i !== j && i !== k) {
              tempArr.push(inpArr[i]);
            } else if (j !== k && j !== i) {
              tempArr.push(inpArr[j]);
            } else if (k !== i && k !== j) {
              tempArr.push(inpArr[k]);
            }
          } else {
            resArr.push(tempArr);
            tempArr = [];
          }
        }
      }
    }
    return resArr;
  }
}

console.log(getPossibleSubsets([5, 9, 23, 0, -2, -1]));
