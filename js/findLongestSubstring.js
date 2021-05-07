// 10. Write a function to find longest substring in a given a string without repeating characters except space
// character. If there are several,return the last one. Consider that all letters are lowercase.

function findLongestSubstr(str) {
  let resArr = [];
  let finalResArr = [];
  let tempArr = [];
  for (let i = 0; i < str.length; i++) {
    if (!resArr.includes(str[i]) || str[i] === " ") {
      resArr.push(str[i]);
    } else {
      tempArr = resArr.splice(0, resArr.indexOf(str[i]) + 1);
      resArr.push(str[i]);
    }
    if (tempArr.length > finalResArr.length) {
      finalResArr.splice(0);
      finalResArr.push(...tempArr);
    }
  }
  return finalResArr.join("");
}

console.log(
  findLongestSubstr(
    "there are no two words in the english language more harmful than 'good job'."
  )
);
