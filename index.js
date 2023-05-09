/*
*
*
*               Galerie des photos
*
*
*/



/*
*
*
*       Version mobile 
*
*
*/




// Au clic sur le bouton de gauche présent sur la photo, on affiche la photo précédente.

const picturesNext = document.querySelector('.pictures-next');
const picturesPrev = document.querySelector('.pictures-prev');
const picturesImg = document.querySelector('.pictures-img');

let currentIndex = 1;
const maxIndex = 5;

function scrollNextPicture() {
  currentIndex = (currentIndex % maxIndex) + 1;
  picturesImg.src = `img/canard-jaune-${currentIndex}-l.png`;
};

function scrollPreviousPicture() {
  currentIndex = (currentIndex - 2 + maxIndex) % maxIndex + 1;
  picturesImg.src = `img/canard-jaune-${currentIndex}-l.png`;
};

picturesNext.addEventListener('click', scrollNextPicture);
picturesPrev.addEventListener('click', scrollPreviousPicture);

// 
