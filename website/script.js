// document.addEventListener("DOMContentLoaded", function () {
//   const menuItems = document.querySelectorAll("nav ul li");

//   menuItems.forEach(function (item) {
//     item.addEventListener("click", function () {
//       // Remove 'active' class from all items
//       menuItems.forEach(function (item) {
//         item.classList.remove("active");
//       });

//       // Add 'active' class to the clicked item
//       this.classList.add("active");
//     });
//   });
// });

// // Slideshow functionality
// const slideshowImages = ["image1.jpg", "image2.jpg", "image3.jpg"];
// let currentImageIndex = 0;

// function changeSlideshowImage() {
//   const slideshowSection = document.querySelector(".slideshow");
//   slideshowSection.style.backgroundImage = `url(${slideshowImages[currentImageIndex]})`;
//   currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
// }

// setInterval(changeSlideshowImage, 5000);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleMegaMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
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
  }
};
