// 7. Write a function to compute a new string from the given one by moving the first char to come after the
// next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore
// any group of fewer than 3 chars at the end.

function swipeCharsOfStr(str) {
  let newStr = [[]];
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (newStr[newStr.length - 1].length < 3) {
      newStr[newStr.length - 1].push(str[i]);
    } else {
      newStr.push([]);
      newStr[newStr.length - 1].push(str[i]);
    }
  }
  for (let i = 0; i < newStr.length; i++) {
    // console.log(newStr);
    if (newStr[i].length === 3) {
      //   let lastItem = newStr[i].pop();
      let firstItem = newStr[i].shift();
      newStr[i].push(firstItem);
      //   newStr[i].unshift(lastItem);
    }
    // console.log(newStr);
  }
  return newStr.join("").split(",").join("");
}

console.log(swipeCharsOfStr("dfgjkloyp"));
