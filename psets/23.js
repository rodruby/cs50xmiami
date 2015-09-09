/*
The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie:
  title (a string), duration (a number), and stars (an array of strings).

- Create a function to print out the movie information like so:
  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// write your solution here...


var favMovie = {
	title: "Three Stooges",
	duration: "2 hours",
	stars: [
		"Larry",
		"Moe",
		"Curly"
	]

};

function printMovie(){

	console.log(favMovie.title + " lasts for" +  favMovie.duration + ". Stars: " + favMovie.stars.join(', ') +".")
}

printMovie();