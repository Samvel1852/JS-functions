// 8. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the
//string. If there are several words which are the longest ones, print the last word(words can be separated
//by space, comma or hyphen).

function findLongestWord(str) {
  let longest = 0;
  str = str.split(/[, && - && ]/);
  str.sort((word1, word2) => (word1.length > word2.length ? -1 : 1));

  return str[0];
}

console.log(
  findLongestWord(
    "Which would be worse - to live as a monster, or to die as a good man?"
  )
);
