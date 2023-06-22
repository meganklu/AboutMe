$(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $('#intro').offset().top
    }, 'slow');
});

document.addEventListener("touchstart", function() {}, true);