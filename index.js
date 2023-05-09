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


////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
*
*
*               Ajout au panier 
*
*
*/

const addCta = document.querySelector('.add-cta');
const cartNb = document.querySelector('.cart-nb');
const addQty = document.querySelector('.add-qty');

let productCounter = 0;
let isAddedToCart = false;

function addProductToCart() {
  if (!isAddedToCart) {
    const quantity = parseInt(addQty.value);
    productCounter += quantity;

    if (productCounter > 99) {
      cartNb.textContent = '99+';
    } else {
      cartNb.textContent = productCounter;
    }

    isAddedToCart = true;
    addCta.disabled = true;
    addCta.textContent = 'Déjà au panier';
    addCta.classList.add('added-to-cart');
  }
}

addCta.addEventListener('click', addProductToCart);
