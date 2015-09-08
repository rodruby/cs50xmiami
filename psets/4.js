/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...

var c = 25;
var f = 100;

var t_in_f = ((c * 9)/5) + 32;
var t_in_c = ((f - 32) * 5)/9;

console.log(c + "°C is " + t_in_f + "°F");
console.log(f + "°F is" + t_in_c + "°C");
