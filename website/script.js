/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleMegaMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("menu-background").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
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

// Slideshow

let slideIndex = 1;
showSlides(slideIndex);
// slideshowAutomation();
let timeoutHandle = setTimeout(slideshowAutomation, 2000); // Change image every 2 seconds

// Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(timeoutHandle);
  showSlides((slideIndex = n));
  timeoutHandle = setTimeout(slideshowAutomation, 2000); // Change image every 2 seconds
}

function slideshowAutomation() {
  slideIndex++;
  showSlides(slideIndex);
  timeoutHandle = setTimeout(slideshowAutomation, 2000); // Change image every 2 seconds
}

// function slideshowAutomation() {
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < dots.length; i++) {
//     if (dots[i].classList.contains("active")) {
//       showSlides((slideIndex = i + 2));
//     }
//   }
// }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
