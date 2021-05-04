function calcByFollowingOper(operator, inpArr) {
  let res = inpArr[0];
  switch (operator) {
    case "+":
      for (let i = 1; i < inpArr.length; i++) {
        res += inpArr[i];
      }
      return res;
    case "-":
      for (let i = 1; i < inpArr.length; i++) {
        res -= inpArr[i];
      }
      return res;
    case "/":
      for (let i = 1; i < inpArr.length; i++) {
        res /= inpArr[i];
      }
      return res;
    case "*":
      for (let i = 1; i < inpArr.length; i++) {
        res *= inpArr[i];
      }
      return res;
  }
}

console.log(calcByFollowingOper("-", [1, 2, 4]));
