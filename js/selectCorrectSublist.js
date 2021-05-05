// 4. Given a word and a list of possible anagrams, select the correct sublist.

// function selectCorrectSublist(word, wordList) {
//   let secWordList = [];
//   let resStr = "";
//   for (let i = 0; i < wordList.length; i++) {
//     if (wordList[i].length === word.length) {
//       secWordList.push(wordList[i]);
//     }
//   }
//   for (let i = 0; i < secWordList.length; i++) {
//     if (word.includes(secWordList[i][0])) {
//       resStr += secWordList[i].split("").shift();
//       //   secWordList[i] = secWordList[i].substring(1, secWordList[i].length - 1);
//     }
//   }
//   console.log(resStr);
// }

function selectCorrectSublist(word, wordList) {
  let resArr = [];
  // word.sort((a, b) => (a > b ? -1 : 1));
  for (let i = 0; i < wordList.length; i++) {
    if (
      word.split("").sort().join("") === wordList[i].split("").sort().join("")
    ) {
      resArr.push(wordList[i]);
    }
  }
  return resArr;
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
