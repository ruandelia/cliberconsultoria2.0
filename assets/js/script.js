const slider = document.getElementById('slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
const totalCards = slider.children.length;
const cardsPerView = 4;
const maxSlide = Math.ceil(totalCards / cardsPerView) - 1;

function updateSlider() {
  const cardWidth = slider.clientWidth / cardsPerView;
  slider.style.transform = `translateX(-${currentSlide * cardWidth * cardsPerView}px)`;
}

// Voltar ao início se passar do último
nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) > maxSlide ? 0 : currentSlide + 1;
  updateSlider();
});

// Ir para o último se voltar do primeiro
prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1) < 0 ? maxSlide : currentSlide - 1;
  updateSlider();
});
