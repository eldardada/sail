const menu = document.querySelector('.aside__menu');
const aside = document.querySelector('.main__aside');

menu.addEventListener('click', () => {
  aside.classList.toggle('aside_show');
});

document.addEventListener('click', e => {
    if(!e.target.classList.contains('aside__menu__item') && !e.target.classList.contains('main__aside')) {
        aside.classList.remove('aside_show');
    }
});

window.addEventListener('resize', () => {
  if(window.innerWidth > 720) menu.style.display = 'none';
  else if(window.innerWidth <= 720 && !aside.classList.contains('aside_show')) menu.style.display = 'block';
});