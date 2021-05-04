// 4. Given a word and a list of possible anagrams, select the correct sublist.
function selectCorrectSublist(word, wordList) {
  word = word.split("");
  for (let i = 0; i < wordList.length; i++) {
    for (let j = 0; j < wordList[i].length; i++) {
      if (word.includes(wordList[0])) {
        wordList.shift();
      }
    }
  }
}

console.log(
  selectCorrectSublist("listen", ["enlists", "google", "inlets", "banana"])
);
