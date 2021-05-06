// 10. Write a function to find longest substring in a given a string without repeating characters except space
// character. If there are several,return the last one. Consider that all letters are lowercase.

function findLongestSubstr(str) {
  let res = "";
  let resMax = "";
  for (let char of str) {
    if (char === " " || char === "'" || !res.includes(char)) {
      res += char;
    } else {
      // console.log(res, 1);
      res = res.slice(res.indexOf(char) + 1) + char;
      // console.log(res, 2);
    }
    resMax = resMax.length <= res.length ? res : resMax;
  }
  return resMax;
}

console.log(
  findLongestSubstr(
    "there are no two words in the english language more harmful than 'good job'."
  )
);
