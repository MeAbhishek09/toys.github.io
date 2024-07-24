const prevButton = document.getElementById('prev-slid');
const nextButton = document.getElementById('next-slid');
const slideContainer = document.querySelector('.hero-img');
const slides = slideContainer.children;

let currentSlide = 0;

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlide();
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlide();
});

function updateSlide() {
  slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}