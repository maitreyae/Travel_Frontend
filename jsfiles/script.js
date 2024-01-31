// Add your JavaScript code here

const categoriesContainer = document.querySelector('.categories-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const categoryCards = document.querySelectorAll('.category-card');

let currentIndex = 0;

function moveToCategory(index) {
  const containerWidth = categoriesContainer.offsetWidth;
  const cardWidth = categoryCards[0].offsetWidth;
  const moveDistance = -1 * (containerWidth - cardWidth) * index;

  categoriesContainer.style.transform = `translateX(${moveDistance}px)`;
}

function moveLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    moveToCategory(currentIndex);
  }
}

function moveRight() {
  if (currentIndex < categoryCards.length - 1) {
    currentIndex++;
    moveToCategory(currentIndex);
  }
}

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

// Change image every 6 seconds
setInterval(() => {
  if (currentIndex < categoryCards.length - 1) {
    currentIndex++;
    moveToCategory(currentIndex);
  } else {
    currentIndex = 0;
    moveToCategory(currentIndex);
  }
}, 6000);