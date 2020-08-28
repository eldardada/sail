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

let menu = document.querySelector('.aside__menu');
let aside = document.querySelector('.main__aside');
let mainContent = document.querySelector('.main-content');


menu.addEventListener('click', () => {
  menu.style.display = 'none';
  aside.classList.toggle('aside_show');
});

mainContent.addEventListener('click', () => {
  aside.classList.remove('aside_show');
  menu.style.display = 'block';
});

window.addEventListener('resize', () => {
  if(window.innerWidth > 720) menu.style.display = 'none';
  else if(window.innerWidth <= 720 && !aside.classList.contains('aside_show')) menu.style.display = 'block';
});
