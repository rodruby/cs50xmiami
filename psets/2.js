/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

// write your solution here...

var cur_age = 39;
var max_age = 100;
var apples_day = 1;

var lifetime_apples = (max_age - cur_age) * 365; 
console.log("You will need " + lifetime_apples + " to last you until the ripe old age of " + max_age);
