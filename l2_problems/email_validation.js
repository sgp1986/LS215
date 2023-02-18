/*
write a function named isValidEmail
takes one argument
  string containing email address
process the input string and return true or false based on input being valid email
valid email
  two parts
    local - name of mailbox - username
    domain - server name and top level domain (.com, .ph, etc)
  separated by one @
  local part must contain one or more letters and or digits
  domain must contain two or more components with a single dot between
    each component
    each component must contain one or more letters only
  
--algo
first separate local and domain parts by splitting with @
then split domain parts at . 
if local.length is 1 and domain.length is > 1
  return the boolean value of local containing
*/

function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false
