const team = document.querySelector('.team');

if(team) {
    let MainSwiper = new Swiper('.team-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    loop: true,
    loopFillGroupWithBlank: true,
    arrows: false,
    updateOnWindowResize: true,
    speed: 600,
    lazy: true,
    navigation: {
      nextEl: '.team__next',
      prevEl: '.team__prev',
    },
    breakpoints: {
      1000: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      1500: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 100
      }
    }
  });
}
