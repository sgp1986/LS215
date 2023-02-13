/*
write a function named anagram
takes two arguments
  string - a word
  array of strings - list of words
return an array containing all words from array arg that are anagrams of the word arg

*/

function anagram(word, list) {
  return list.filter(listWord => {
    return word.split('').sort().join('') === listWord.split('').sort().join('');
  });
}

// function anagram(word, list) {
//   return list.filter(candidate => areAnagrams(candidate, word));
// }

// function areAnagrams(source, target) {
//   let sourceLetters = source.split('').sort();
//   let targetLetters = target.split('').sort();
//   return compareArrays(sourceLetters, targetLetters);
// }

// function compareArrays(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   return array1.every((letter, index) => letter === array2[index]);
// }

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]