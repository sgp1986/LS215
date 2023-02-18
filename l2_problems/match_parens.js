/*
write a function named isBalanced
takes one argument
  string
return true if the string contains properly balanced parentheses, or false
*/

function isBalanced(string) {
  let balanced = 0;

  string.split('').forEach(char => {
    if (balanced < 0) {
      return false;
    } else if (char === '(') {
      balanced += 1;
    } else if (char === ')') {
      balanced -= 1;
    }
  });

  return balanced === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false