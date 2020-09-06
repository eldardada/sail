let swiperSimproducts = new Swiper('.simproducts-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 600,
    lazy: true,
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

const feedbackSlider = document.querySelector('.feedback-slider');

var swiperFeedback = new Swiper(feedbackSlider, {
  slidesPerView: 1,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  spaceBetween: 50,
  centerSlides: false,
  slideClass: 'feedback-slide',
  loop: true,
  updateOnWindowResize: true,
  speed: 600,
  lazy: true,
  navigation: {
    prevEl: '.feedback-slider__next'
  },
  breakpoints: {
    1248: {
      slidesPerView: 2,
    }
  }
});

