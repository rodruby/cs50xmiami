/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

notBad("this is not that bad my friend.");

function notBad(sentence) { 

  var ind_not = sentence.indexOf("not");
  var ind_bad = sentence.lastIndexOf("bad");
  s_length = sentence.length;

  if(ind_not > 0){  	
  	//console.log("sliced not! " + not_slice);
  	if(ind_bad > 0){
  		//console.log("found bad! " + ind_bad);
  		var not_slice = sentence.slice(0, ind_not);
  		var bad_slice = sentence.slice(ind_bad+3, s_length);
  		console.log(not_slice + "good" + bad_slice);
  	}

  } else console.log(sentence);
}

