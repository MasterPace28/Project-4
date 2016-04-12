// Interactive Media Gallery by @ZachCreates
// A searchable media gallery and lightbox.



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
// User clicks on desired image
	//Lightbox opens
// Lightbox
	//dark background
	//centered image
	//caption at bottom
	//arrows left and right next to image
// User can move to next or previous picture by clicking on arrows
// User can move to next or previous picture by using arrow keys
// User can exit lightbox by clicking anywhere outside of lightbox
// Additional Functions
	// Pictures and Videos (Youtube, Vimeo)
	// Animation effects when searching gallery