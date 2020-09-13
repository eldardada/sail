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


  let initialPoint;
  let finalPoint

  document.addEventListener('touchstart', event => {
    initialPoint = event.changedTouches[0];
  }, false);

  document.addEventListener('touchend', event => {
    finalPoint = event.changedTouches[0];
    let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if ((xAbs > 20 || yAbs > 20) && (xAbs > yAbs) && (finalPoint.pageX < initialPoint.pageX)) {
      hideMenu();
    }
    }, false);
}

