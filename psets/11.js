/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...


var currentYear = new Date().getFullYear();

function calculateAge(birtYear, cuurentYear){

    
    var y = cuurentYear - birtYear;

    var z = (cuurentYear - birtYear) - 1;

    console.log("They are either " + z + " or " + y);

 }
calculateAge(1980, 2015);
calculateAge(1976, 2015);
calculateAge(2005, 2015);