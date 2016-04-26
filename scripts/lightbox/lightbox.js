// Lightbox by @ZachCreates
// Based on TeamTreehouse jQyery Basics: Creating a Simple Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $("<p></p>");
var $arrowleft = $('<div id="arrow"></div>');
var $arrowright = $('<div id="arrow"></div>');

// add image to overlay
$overlay.append($image);

// add cation to overlay
$overlay.append($caption);

// add overlay
$('body').append($overlay);

// capture link surrounding image
$('.gallery a').click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr('href');
	
	// update overlay with the image linked in the link
	$image.attr("src", imageLocation);

	// show the overlay
	$overlay.show();

	// get data-c\aption value
	var captionText = $(this).attr('data-caption');
	$caption.text(captionText);
});

// exit overlay when clicked
$overlay.click(function(){
	$overlay.hide();
});

// add arrows to navigate overlay

// use keyboard to navigate overlay