/*
write a function named reverse
takes one argument
  string
returns new string containing the original string words in reverse

--algo
split words by spaces giving an array of words
iterating through array, transform each array to reverse order
  forEach word
    
join words back with spaces and return new string
*/


function reverse(string) {
  return string.split(' ')
               .map(word => word.split('').reverse().join(''))
               .reverse()
               .join(' ');
}

let a = 'hello';
console.log(reverse(a));                  // returns "olleh"
console.log(a);
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"