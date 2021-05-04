// 5. Write a function, which receives a string, finds possible largest numbers in the string and returns their
//sum.

function retSumOfNums(str) {
  str = str.split(/[a-z && A-Z]/);
  str = str.filter((item, i) => item !== "");
  return str.reduce((a, b) => Number(a) + Number(b));
}

console.log(retSumOfNums("FwrtY45KHL120mn10P"));
