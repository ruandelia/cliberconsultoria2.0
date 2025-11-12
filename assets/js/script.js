const slider = document.querySelector('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

function getCardsPerView() {
  if (window.innerWidth <= 500) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}


function updateSlider() {
  const cardWidth = slider.children[0].offsetWidth + 30; // margem aproximada
  const cardsPerView = getCardsPerView();
  const offset = currentSlide * cardWidth;

  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${offset}px)`;
}

function getMaxSlides() {
  const cardsPerView = getCardsPerView();
  const totalCards = slider.children.length;
  return totalCards - cardsPerView;
}

nextBtn.addEventListener('click', () => {
  console.log(window.innerWidth);
  const cardsPerView = getCardsPerView();
  const maxSlide = getMaxSlides();

  if (currentSlide + cardsPerView <= maxSlide) {
    currentSlide += cardsPerView;
  } else {
    currentSlide = 0; // volta ao início
  }

  updateSlider();
});

prevBtn.addEventListener('click', () => {
  const cardsPerView = getCardsPerView();
  const maxSlide = getMaxSlides();

  if (currentSlide - cardsPerView >= 0) {
    currentSlide -= cardsPerView;
  } else {
    currentSlide = maxSlide; // vai para o fim
  }

  updateSlider();
});


// Atualiza ao redimensionar a janela
window.addEventListener('resize', () => {
  currentSlide = 0;
  updateSlider();
});
