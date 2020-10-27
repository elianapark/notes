function funny_phrases(words) {
  let results = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 6) {
      results.push(words[i]);
    }
  }
  return results;
}

console.log(
  funny_phrases([
    "absolutely",
    "fly",
    "sorry",
    "taxonomy",
    "eighty",
    "excellent",
  ])
); //[12,9,15]
console.log(funny_phrases(["tour", "girl", "you", "party", "guy", "pizza"])); // []
