/*
DrEvil!

Create a function called DrEvil.
It should take a single argument, an amount, and return '<amount> dollars',
except it will add '(pinky)' at the end if the amount is 1 million.

For example:
  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

console.log("Enter an amount:");

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    
    var x = Number(d); 

    function drEvil(x) {

    	if(x >= 1000000){
    		return 1;
    	} else return 0;

    }

    var y = drEvil(x);

    if(y === 1){

    	console.log(x + '(pinky)');
    	
    } else console.log(x);   

  });


