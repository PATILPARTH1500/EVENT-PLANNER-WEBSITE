"use strict";

// navbar

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}

// header
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const imageSlider = document.getElementById('imageSlider');
  const slides = document.querySelectorAll('.slide');
  const heroContent = document.querySelector('.hero-content');
  let currentSlide = 0;
  let sliderInterval;

  // Show the slider initially
  imageSlider.classList.remove('hidden'); // Remove hidden class to show slider
  imageSlider.classList.add('show'); // Add show class for fade-in effect

  // Show the first slide initially
  slides[currentSlide].classList.add('active'); // Show the first slide

  // Function to start the image slider
  function startImageSlider() {
    sliderInterval = setInterval(() => {
      slides[currentSlide].classList.remove('active'); // Hide current slide
      currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
      slides[currentSlide].classList.add('active'); // Show next slide
    }, 10000); // Change slide every 10 seconds
  }

  // Start the image slider after 15 seconds
  setTimeout(() => {
    startImageSlider();
    heroContent.classList.add('show'); // Show hero content after the first slide
  }, 15000); // Adjust timing based on your slider interval
});