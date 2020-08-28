let swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  arrows: false,
  navigation: {
    nextEl: '.team__next',
    prevEl: '.team__prev',
  },
  breakpoints: {
    960: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1450: {
      slidesPerView: 3,
      spaceBetween: 100
    }
  }
});


