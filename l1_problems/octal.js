/*
write a function named octaltoDecimal
takes one argument
  string containing representation of an octal number
convert octal number to decimal number
return decimal Number

**conversion
decimal is base 10 - linear combo of powers of 10
233 === 2*10^2 + 3*10^1 + 3*10^0 === 2*100 + 3*10 + 3*1
octal is base 8 - linear combo of powers of 8
233 === 2*8^2 + 3*8^1 + 3*8^0 === 2*64 + 3*8 + 3*1 == 128 + 24+ 3 === 155
octal 233 === decimal 155

--problem
convert input string to array of each char and convert each to number
declare a counter = array length - 1
declare a sum = 0
iterate through digits array, multiply digit * (8^counter), add result to sum
subtract 1 from counter each iteration
if counter === 0, add digit to sum
return sum
*/

const octalToDecimal = (numberString) => {
  let digits = numberString.split('').map(digit => Number(digit));
  let counter = digits.length - 1;
  let sum = 0;

  for (let index = 0; index < digits.length; index += 1) {
    const digit = digits[index];
    if (counter === 0) {
      sum += digit;
    } else {
      sum += digit * powerOfEight(counter);
    }
    counter -= 1;
  }

  return sum;
}

// function octalToDecimal(numberString) {
//   let decimalParts = numberString.split('').map((digitChar, index) => {
//     return Number(digitChar) * Math.pow(8, numberString.length - index - 1);
//   });

//   return decimalParts.reduce((sum, number) => sum + number);
// }
// function octalToDecimal(numberString) {
//   return numberString.split('').reduce((sum, digitChar, index) => {
//     return sum + Number(digitChar) * Math.pow(8, numberString.length - index - 1);
//   }, 0);
// }

const powerOfEight = (counter) => {
  product = 1;
  for (let times = 0; times < counter; times += 1) {
    product *= 8;
  }
  return product;
}

// console.log(powerOfEight(3));

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9