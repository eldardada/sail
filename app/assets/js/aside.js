const menu = document.querySelector('.aside__menu');
const aside = document.querySelector('.main__aside');

menu.addEventListener('click', () => {
  aside.classList.toggle('aside_show');
});

document.addEventListener('click', e => {
    if(!e.target.classList.contains('aside__menu__item') 
    && e.target.dataset.name != 'aside-icons' 
    && e.target.dataset.name !== 'aside-icons-list') {
        aside.classList.remove('aside_show');
    }
});

window.addEventListener('resize', () => {
  if(window.innerWidth > 768) menu.style.display = 'none';
  else if(window.innerWidth <= 768 && !aside.classList.contains('aside_show')) menu.style.display = 'block';
});