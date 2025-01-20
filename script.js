const searchToggle = document.getElementById('search-toggle');
const searchBar = document.getElementById('search-bar');
const header = document.getElementById('header');
const searchInput = document.getElementById('search-input');

searchToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  const isActive = searchBar.classList.contains('active');
  if (isActive) {
    searchBar.classList.remove('active');
    header.style.padding = '25px 0';
  } else {
    searchBar.classList.add('active');
    header.style.padding = '30px 0';
    searchInput.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!searchBar.contains(event.target) && !searchToggle.contains(event.target)) {
    searchBar.classList.remove('active');
    header.style.padding = '25px 0';
  }
});

// اسلایدر
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexAuto++;
  if (slideIndexAuto > slides.length) {slideIndexAuto = 1}
  slides[slideIndexAuto-1].style.display = "block";
  setTimeout(showSlidesAuto, 3000); // Change image every 3 seconds
}
