// 6. Write a function which receives two strings and removes appearances of the second string from the first
//one.

function remAppearances(sentence, word) {
  sentence = sentence.split(word);
  sentence = sentence.join("");
  sentence = sentence.split("  ").join(" ");
  return sentence;
}

console.log(remAppearances("This is some text.", "is"));
