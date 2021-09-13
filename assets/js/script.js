// Testimonial Slides
let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function previous() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

// Menu Mobile
window.onload = function () {
  document.querySelector(".menuMobile").addEventListener("click", function () {
    if (document.querySelector(".menu nav ul").style.display == "flex") {
      document.querySelector(".menu nav ul").style.display = "none";
    } else {
      document.querySelector(".menu nav ul").style.display = "flex";
    }
  });
};
