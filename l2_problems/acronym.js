/*
write a function named acronym
  takes one argument
    string of words
return a string containing the first letters of each word
words split by space or dash

--algo
replace dash with space
split string by spaces
transform the word to the first letter capitalized
return these letters joined together
*/

function acronym(string) {
  return string.replace('-', ' ')
               .split(' ')
               .map(word => word[0].toUpperCase())
               .join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"