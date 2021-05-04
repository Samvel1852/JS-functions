// 3. Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
// * If the phone number is less than 10 digits assume that it is a bad number
// * If the phone number is longer than 10, then it is a bad number
// * If the phone number is 10 digits assume that it is good
// *If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
//and return remaining 10 digits.
// * If the phone number contains + symbol more than one, consider it as a bad number.
// * If the phone number contains + symbol not as the first character, consider it as a bad number.

function validatePhoneNumber(inpNumber) {
  inpNumber = inpNumber.toString().split("");
  if (inpNumber.includes(" ")) {
    for (let i = 0; i < inpNumber.length; i++) {
      if (inpNumber[i] === " ") {
        inpNumber.splice(i, 1);
      }
    }
    inpNumber = inpNumber;
  }
  if (inpNumber.length > 10) {
    if (inpNumber.length === 11 && inpNumber[0] === "+") {
      inpNumber.shift();
      inpNumber = inpNumber.join("");
      return inpNumber;
    } else {
      return "This is a bad number";
    }
  } else if (inpNumber.length < 10) {
    return "This is a bad number";
  } else if (inpNumber.length === 10) {
    let plusArr = [];
    if (inpNumber.join("").startsWith("+")) {
      inpNumber.shift();
      if (inpNumber.join("").includes("+")) {
        return "This is a bad number";
      }
    } else if (inpNumber.join("").includes("+")) {
      return "This is a bad number";
    }
    for (let i = 0; i < inpNumber.length; i++) {
      if (inpNumber[i] === "+") {
        plusArr.push(inpNumber[i]);
      }
    }
    if (plusArr.length > 1) {
      return "It is a bad number";
    } else {
      return inpNumber.join("");
    }
  }
}

console.log(validatePhoneNumber("+0008989562"));
