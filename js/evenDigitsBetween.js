// 11.Write a function, which receives two numbers as arguments and finds all numbers between them such
// that each digit of the number is even. The numbers obtained should be printed in a comma-separated
// sequence on a single line.

function evenDigsBetween(num1, num2) {
  let resArr = [];
  let resArrFinal = [];
  for (let i = num1; i <= num2; i++) {
    resArr.push(i);
  }
  for (let i = 0; i < resArr.length; i++) {
    let tempNum = resArr[i].toString().split("");
    // for (let j = 0; j < resArr[i].toString().length; j++){
    //     if (tempNum)
    // }
    if (tempNum.every((dig) => Number(dig) % 2 === 0)) {
      resArrFinal.push(tempNum.join(""));
    }
  }
  //   console.log(resArrFinal);
  if (resArrFinal.length === 0) {
    return "Such numbers doesn't exist";
  } else {
    return resArrFinal;
  }
}

console.log(evenDigsBetween(99, 199));
