const aside = document.querySelector('.aside');

if(aside) {
  const menu = document.querySelector('.aside__menu');
  const aside = document.querySelector('.main__aside');
  
  menu.addEventListener('click', () => {
    aside.classList.toggle('aside_show');
  });
  
  function hideMenu() {
    aside.classList.remove('aside_show');
  };
  
  document.addEventListener('click', e => {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_aside = target == aside;
    const aside_is_active = aside.classList.contains('aside_show');
  
    if (!its_aside && !its_menu && aside_is_active) {
      hideMenu();
    }
  });
  
  window.addEventListener('resize', () => {
    if(window.innerWidth > 768) menu.style.display = 'none';
    else if(window.innerWidth <= 768 && !aside.classList.contains('aside_show')) menu.style.display = 'block';
  });
}

