/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...


function celsiusToFahrenheit(c){
	var t_in_f = ((c * 9)/5) + 32;
	console.log(c + "°C is " + t_in_f + "°F");
}

function fahrenheitToCelsius(f){
	var t_in_c = ((f - 32) * 5)/9;
	console.log(f + "°F is " + t_in_c + "°C");
}

celsiusToFahrenheit(50);
fahrenheitToCelsius(50);