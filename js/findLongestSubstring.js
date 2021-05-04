// 10. Write a function to find longest substring in a given a string without repeating characters except space
// character. If there are several,return the last one. Consider that all letters are lowercase.

function findLongestSubstr(str) {
  let resArr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i !== j) {
        resArr.push(str.slice(i, j));
      }
    }
  }
  for (let i = 0; i < resArr.length; i++) {
    for (let j = 0; j < resArr[i].length; j++) {
      for (let k = 0; k < resArr[i].length; k++) {
        if (resArr[i][j] === resArr[i][k] && k !== j) {
          resArr.splice(i, 1);
        }
      }
    }
  }
  //   console.log(resArr.sort((a, b) => (a.length > b.length ? -1 : 1)));
  return resArr.sort((a, b) => (a.length > b.length ? -1 : 1))[0];
}

console.log(
  findLongestSubstr(
    "“there are no two words in the english language more harmful than 'good job'."
  )
);
