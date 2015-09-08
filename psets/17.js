/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...

function pluralize(noun, x){
	if(noun == "sheep" || noun == "geese")
		console.log(x + " " + noun + ".");

	else if(x > 1 && !(noun == "sheep" || noun == "geese"))
		console.log(x + " " + noun + "s.");
	else
		console.log(x + " " + noun + ".");
}

pluralize("cat", 5);
pluralize("dog", 1);
pluralize("geese", 5);