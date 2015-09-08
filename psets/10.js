/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...

fortuneTeller(2, "Yanet", "Miami", "Web Developer");

fortuneTeller(3, "Adriana", "Miami", "Appraiser");

fortuneTeller(4, "Gelsis", "Miami", "Realtor");



function fortuneTeller(numChild, parner, geoLoc, job){
	console.log("You will be a "+job+" in "+geoLoc+", and married to "+parner+" with "+numChild+" kids.");
}