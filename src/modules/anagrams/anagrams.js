/**
 * Kata06: Anagrams - http://codekata.com/kata/kata06-anagrams/
 * 
 * The challenge is fairly simple: given a file containing one word per line,
 * print out all the combinations of words that are anagrams; each line in the
 * output contains all the words from the input that are anagrams of each other.
 * 
 * valid output example:
 * - fresher refresh
 * - sinks skins
 * - knits stink
 * - rots sort
 */
export default function anagrams(array) {
  const anagrams = new Map();

  // loop through anagram wordlist
  for (let index = 0; index < array.length; index++) {
    const word = array[index];

    // skip letters, not anagrams
    if (word.length <= 1) {
      continue;
    }

    // split a word into an array, then sort, and join into a word to compare all against
    const wordSorted = word.split('').sort().join("");
    const anagram = anagrams.get(wordSorted);

    // if this exists already, we can push our word to it, otherwise, set the first instance in the map
    if (anagram) {
      anagram.push(word);
    } else {
      anagrams.set(wordSorted, [word]);
    }
  }

  const output = [];

  // only return anagrams with more than 1 value
  for (let value of anagrams.values()){
    if (value.length > 1) {
      // join the anagrams as expected with a space
      output.push(value.join(' '));
    }
  }

  return output;
}
