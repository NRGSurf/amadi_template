document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("nav ul li");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove 'active' class from all items
      menuItems.forEach(function (item) {
        item.classList.remove("active");
      });

      // Add 'active' class to the clicked item
      this.classList.add("active");
    });
  });
});

// Slideshow functionality
const slideshowImages = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentImageIndex = 0;

function changeSlideshowImage() {
  const slideshowSection = document.querySelector(".slideshow");
  slideshowSection.style.backgroundImage = `url(${slideshowImages[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
}

setInterval(changeSlideshowImage, 5000);
