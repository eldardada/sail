const simproducts = document.querySelector('.simproducts');
if(simproducts) {
  let swiperSimproducts = new Swiper('.simproducts-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 600,
    arrows: false,
    updateOnWindowResize: true,
    navigation: {
      nextEl: '.simproducts__next',
      prevEl: '.simproducts__prev',
    },
    breakpoints: {
    800: {
        slidesPerView: 2,
        spaceBetween: 50
    },
    1400: {
        slidesPerView: 3,
        spaceBetween: 100
      }
    }
});

let swiperFeedback = new Swiper('.feedback-slider', {
  slidesPerView: 1,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  spaceBetween: 50,
  slideClass: 'feedback-slide',
  loop: true,
  loopFillGroupWithBlank: true,
  speed: 600,
  navigation: {
    nextEl: '.feedback-slider__next'
  },
  breakpoints: {
    1248: {
      slidesPerView: 2,
      slidesPerColumn: 2,
    }
  }
});
}

const cardZabor = document.querySelector('.card-zabor');

if(cardZabor) {
  let swiperFeedback = new Swiper('.card-zabor-slider', {
    slidesPerView: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 50,
    centerSlides: false,
    slideClass: 'feedback-slide',
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 600,
    navigation: {
      nextEl: '.feedback-slider__next'
    },
    breakpoints: {
      1248: {
        slidesPerView: 2,
        slidesPerColumn: 2
      }
    }
  });
}
