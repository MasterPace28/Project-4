// Accept live user input from form input box




var timer = null;
var x = '';

$('.searchbox').keydown(function(){
	clearTimeout(timer);
	timer = setTimeout(userInput, 100)
});

function userInput() {
	var x = document.querySelector(".searchbox").value;
	console.log(x);
}





	// Show/Hide images as user types

		// Animation effects when searching gallery