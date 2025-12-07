// -----------------------------
// COUNTDOWN FUNCTION
// -----------------------------
function countdown() {
    var seconds = 10;  // starting value

    function tick() {
        document.getElementById("timer").innerHTML = seconds;
        seconds--;

        if (seconds >= 0) {
            setTimeout(tick, 1000);  // wait 1 second then call tick again
        } else {
            document.getElementById("timer").innerHTML = "Time's up!";
        }
    }

    tick(); // start the countdown
}


// -----------------------------
// SLIDESHOW FUNCTIONS
// -----------------------------
var slideIndex = 1;      // start from first slide
showSlides(slideIndex);

// Next / previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // remove 'active' from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // show current slide and mark active dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
