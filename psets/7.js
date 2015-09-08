/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

var s = "hello hommie how high are you";

//console.log(s[0]);

fixStart(s);

function fixStart(s) {
	
  // write your solution here...

  var s1 = s[0];
  var s_length = s.length;
  console.log(s_length);
  var new_s;
  new_s = s1;
  for(i = 1; i < s_length; i++){
  	if(s[i] == s1){
  		new_s += '*';
  	} else {
  		new_s += s[i];
  	}
  }
  console.log(new_s);
}
