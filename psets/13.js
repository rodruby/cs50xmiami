/*
The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...

var radius = 5;

function calcCircumfrence(radius){
	var circumference = (2 * radius) * 3.141592;
	console.log("The circumference is " + circumference+ ".");
}

function calcArea(radius){ 
var area = 3.141592 * (radius * radius);
	console.log("The area is " + area + ".");
}

calcCircumfrence(5);
calcArea(6);