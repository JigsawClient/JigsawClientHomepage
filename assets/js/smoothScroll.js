var elementY;
var intervalId;

var timer = 0;

function scrollToId(elementid) {
	var elmnt = document.getElementById(elementid);

	elementY = elmnt.getBoundingClientRect().top + window.scrollY - 90;
	//elementY = elmntY;

	if(intervalId != 0 && timer != 0) {
		clearInterval(intervalId);
	}

	timer = 0;

	intervalId = setInterval(doScrolling, 20);
}

function doScrolling() {
	timer++;
	if(timer > 55 || Math.abs(window.pageYOffset - elementY) <= 1) {
		timer = 0;
		clearInterval(intervalId);
	}

	var distance = elementY - window.pageYOffset;

	window.scrollTo(0, window.pageYOffset + (distance / 10));
}
