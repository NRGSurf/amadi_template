// ------- MENU -------

function toggleMegaMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("menu-background").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
    var backgrounds = document.getElementsByClassName("menu-background");
    var i;
    for (i = 0; i < backgrounds.length; i++) {
      var openBackground = backgrounds[i];
      if (openBackground.classList.contains("show")) {
        openBackground.classList.remove("show");
      }
    }
  }
};

// ------- Slideshow -------

let slideIndex = [1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3"];
let dotId = ["dot0", "dot1", "dot2"];
let timeoutHandle = null;
let isAutomated = false;
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

const SLIDESHOW_INTERVALL = 3000;

// Next/previous controls
function plusSlides(n, no) {
  clearTimeout(timeoutHandle);
  showSlides((slideIndex[no] += n), no);
  if (isAutomated === true) {
    timeoutHandle = setTimeout(slideshowAutomation, SLIDESHOW_INTERVALL);
  }
}

function currentSlide(n, no) {
  clearTimeout(timeoutHandle);
  showSlides((slideIndex[no] = n), no);
  if (isAutomated === true) {
    timeoutHandle = setTimeout(slideshowAutomation, SLIDESHOW_INTERVALL);
  }
}

function slideshowAutomation() {
  for (var i = 0; i < slideIndex.length; i++) {
    slideIndex[i]++;
    showSlides(slideIndex[i], i);
  }
  if (isAutomated === true) {
    timeoutHandle = setTimeout(slideshowAutomation, SLIDESHOW_INTERVALL);
  }
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName(dotId[no]);
  if (n > slides.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[no] - 1].style.display = "block";
  dots[slideIndex[no] - 1].className += " active";
}

const mediaQuery = window.matchMedia("(min-width: 600px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    console.log("Media Query Matched!");
    timeoutHandle = setTimeout(slideshowAutomation, SLIDESHOW_INTERVALL);
    isAutomated = true;
  } else {
    isAutomated = false;
    if (timeoutHandle !== null) {
      clearTimeout(timeoutHandle);
    }
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

// ----- function for DIV movements -----

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("shown");
    } else {
      reveals[i].classList.remove("shown");
    }
  }
}

window.addEventListener("scroll", reveal);
