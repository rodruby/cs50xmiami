/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

var  a = "hello";
var b = "world";

var x = mixUp(a, b);
console.log(x.new_a + ' ' + x.new_b);

function mixUp(a, b) {


	var two_of_a = a.substring(0,2);
	var two_of_b = b.substring(0,2);

	var new_a = a.replace(two_of_a, two_of_b);
	var new_b = b.replace(two_of_b, two_of_a);

	return {new_a: new_a, new_b: new_b};
  // write your solution here...
}
