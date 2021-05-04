//   let selectedArr = wordList.filter(function (val, i) {
//     if (word.length === val.length) {
//       for (let j = 0; j < word.length; j++) {
//         if (word[j] === val[i] && val.includes(word[j])) {
//           return val;
//         }
//       }
//     }
//   });
//   return selectedArr;

// 4. Given a word and a list of possible anagrams, select the correct sublist.

function selectCorrectSublist(word, wordList) {
  let secWordList = [];
  let resStr = "";
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i].length === word.length) {
      secWordList.push(wordList[i]);
    }
  }
  for (let i = 0; i < secWordList.length; i++) {
    if (word.includes(secWordList[i][0])) {
      resStr += secWordList[i].split("").shift();
      //   secWordList[i] = secWordList[i].substring(1, secWordList[i].length - 1);
    }
  }
  console.log(resStr);
}

console.log(
  selectCorrectSublist("pencil", [
    "licnep",
    "circular",
    "pupil",
    "nilcpe",
    "leppnec",
  ])
);

// console.log(wordList[i].length);
// for (let j = 0; j < wordList[i].length; i++) {
//   if (word.includes(wordList[i][0])) {
//     let resStr = "";
//     wordList[i] = wordList[i].split("");
//     resStr += wordList[i].shift();
//   }
// }
// resWords.push(resStr);
