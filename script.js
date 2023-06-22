// Scroll to starting hold when page loads
window.onload = function () {
  var scrollDiv = document.getElementById("intro").offsetTop;
	window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}

// Mobile hover
document.addEventListener("touchstart", function() {}, true);

// Get the button:
let backDown = document.getElementById("backDown");

// If element out of viewport, show button
window.onscroll = function() {
  var introHold = document.getElementById("intro");
  var bounding = introHold.getBoundingClientRect();

  if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
    backDown.style.display = "none"; 
  } else {
    backDown.style.display = "block";
  }
};

// When the user clicks on the button, scroll to the bottom of the document
function scrollDown() {
	var scrollDiv = document.getElementById("intro").offsetTop;
	window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}