/*
The Recipe Card

Never forget another recipe!

- Create an object to hold information on your favorite recipe. It should have
  properties for title (a string), servings (a number),
  and ingredients (an array of strings).

- On separate lines (one console.log statement for each), log the recipe
  information so it looks like:
    Mole
    Serves: 2
    Ingredients:
    cinnamon
    cumin
    cocoa
*/

// write your solution here...

var favRecipe = {
	title: "Rice, Beans, and Chicken.",
	serves: 2,
    ingredients: [
    	"white rice", 
    	"black beans",
    	"baked chicken"
    	]
};

console.log(favRecipe.title);
console.log("Serves: " + favRecipe.serves);
console.log("Ingredients:");
var ingLength = favRecipe.ingredients.length;
for(i = 0; i < ingLength; i++)
	console.log( favRecipe.ingredients[i]);