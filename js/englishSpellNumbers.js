// 12. Write a function, which will receive a number between 0 to 999,999 and spell out that number in English.

function spellEnglish(number) {
  let spellObjTillTwenty = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
  };
  let tensObj = {
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };
  if (number < 20) {
    return spellObjTillTwenty[number];
  } else if (number >= 20 && number < 100) {
    let remainder = number % 10;
    let quotient = number - remainder;
    return tensObj[quotient] + spellObjTillTwenty[remainder];
  } else if (number >= 100 && number < 1000) {
    let remainder = number % 100;
    let quotient = (number - remainder) / 100;
    let lastRemainder = remainder % 10;
    let lastQuotientByTens = ((remainder - lastRemainder) / 10) * 10;
    if (lastQuotientByTens >= 20) {
      return (
        spellObjTillTwenty[quotient] +
        " hundred " +
        tensObj[lastQuotientByTens] +
        " " +
        spellObjTillTwenty[lastRemainder]
      );
    } else {
      return (
        spellObjTillTwenty[quotient] +
        " hundred " +
        spellObjTillTwenty[lastQuotientByTens + lastRemainder]
      );
    }
  }
}

console.log(spellEnglish(935)); // If will have time will return to this, the logic the same then to continue
