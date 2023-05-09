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


const picturesNext = document.querySelector('.pictures-next');
const picturesPrev = document.querySelector('.pictures-prev');
const picturesImg = document.querySelector('.pictures-img');
const thumbs = document.querySelectorAll('.thumbs-itm');

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


/*
*
*
*       Version ordinateur 
*
*
*/



thumbs.forEach((thumb, index) => {
  thumb.addEventListener('mouseover', () => {
    picturesImg.src = `img/canard-jaune-${index + 1}-l.png`;
  });
});
