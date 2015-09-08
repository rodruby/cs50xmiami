/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/

verbing("theee");

function verbing(word) {
  // write your solution here...
  w_length = word.length;
  if(w_length < 3){
  	console.log(word);
  }
  else if ((word[w_length - 3] =="i") && (word[w_length - 2] =="n") && (word[w_length - 1] == "g")){
  	word = word + "ly";
  	console.log(word);
  } else {
  	word = word + "ing";
  	console.log(word);
  }
}
