let swiperSimproducts = new Swiper('.simproducts-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    arrows: false,
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