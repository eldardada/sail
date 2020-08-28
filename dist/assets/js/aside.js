const menu = document.querySelector('.aside__menu');
const aside = document.querySelector('.main__aside');
const allNotAside = document.querySelector('*:not(.main__aside):not(.aside__menu)');

menu.addEventListener('click', () => {
  menu.style.display = 'none';
  aside.classList.toggle('aside_show');
});

allNotAside.addEventListener('click', () => {
  aside.classList.remove('aside_show');
  menu.style.display = 'block';
});

window.addEventListener('resize', () => {
  if(window.innerWidth > 720) menu.style.display = 'none';
  else if(window.innerWidth <= 720 && !aside.classList.contains('aside_show')) menu.style.display = 'block';
});