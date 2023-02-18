let firstName = 'Steve';
let lastName = 'Price';

let fullName = firstName.concat(' ' + lastName);

console.log(fullName);

let fullNameArray = fullName.split(' ');

console.log(fullNameArray);

let language = 'JavaScript';

let idx = language.indexOf('S');

console.log(idx);

let charCode = language.charCodeAt(idx);

console.log(charCode);

console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));

let a = 'a';
let b = 'b';

console.log(a > b);
b = 'B';
console.log(a > b);

console.log(language.slice(1, 4));
console.log(language.slice(2, 4));

console.log(language.substring(1, 4));
console.log(language.substring(2, 4));

console.log(language.slice(1, -1));
console.log(language.slice(2, -1));

console.log(language.substring(1, -1));
console.log(language.substring(2, -1));

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = fact1.concat(' and ' + fact2.toLowerCase());

console.log(compoundSentence);
console.log(fact1[0]);
console.log(fact2[0]);

const pi = 22 / 7;

console.log(pi.toString().lastIndexOf('14'));

let boxNumber = (356).toString();

console.log(boxNumber);

boxNumber = parseInt(boxNumber, 10);

console.log(typeof boxNumber);

boxNumber = String(boxNumber);

console.log(typeof boxNumber);

let readline = require('readline-sync');
let name = readline.question('What is your name?');

if (name.endsWith('!')) {
  name = name.slice(0, -1);
  console.log('HELLO ' + name.toUpperCase() + '. WHY ARE WE SCREAMING?');
} else {
  console.log('Hello ' + name + '.');
}
