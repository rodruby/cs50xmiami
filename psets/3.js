/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...

var radius = 5;
var circumference = (2 * radius) * 3.141592;
var area = 3.141592 * (radius * radius);

console.log("The circumference is " + circumference + ". The area is " + area + ".");