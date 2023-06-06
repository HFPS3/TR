window.onload = function() {
  var slides = document.querySelectorAll('.slide');
  var currentIndex = 0;

  function showSlide(index) {
    slides.forEach(function(slide) {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 3000);
};
