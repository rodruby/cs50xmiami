/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...

var current_year = new Date().getFullYear();
//var birth_yr = prompt("Enter the current year");
//console.log("They are either " + current_year - birth_yr + " or " + current_year - birth_yr - 1);

console.log("Enter the birth year:");

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    
    var x = Number(d); 

    var y = current_year - d;

    var z = (current_year - d) - 1;

    console.log("They are either " + z + " or " + y);

  });