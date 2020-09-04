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


const teamSlider = document.querySelector('.team-container');

let MainSwiper = new Swiper(teamSlider, {
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

// basket
 
const basketModels = document.querySelector('.basket-models');

basketModels.addEventListener('click', e => {
    const target = e.target;

    let div = target;

    while(!div.classList.contains('btn_count')) {
        div = div.parentElement;
        if(div == basketModels) {
            break;
        }
    }

    if(div != basketModels) {
        const itInc = div.classList.contains('btn_count_inc');
        const itDec = div.classList.contains('btn_count_dec');

        if(itInc) {
            const divParrent = div.parentElement;
            const input = divParrent.querySelector('input');
            input.value = Number(input.value) + 1; 
        }
        else if(itDec) {
            const divParrent = div.parentElement;
            const input = divParrent.querySelector('input');

            if(input.value > 0) {
                input.value -= 1; 
            }
        }
    }
});

// card

const feedbackBtn = document.querySelector('.feedback button');
const feedbackModal = document.querySelector('.feedback-modal');
const modalBg = document.querySelector('.modal-bg');
const feedbackModalExit = feedbackModal.querySelector('.feedback-modal__exit');
const body = document.querySelector('body');


function hideFeedbackModal() {
    feedbackModal.classList.remove('show');
    body.style.overflow = 'initial';
    modalBg.classList.toggle('show');
}

document.addEventListener('click', e => {
    const target = e.target;
    const its_feedbackModal= target == feedbackModal || feedbackModal.contains(target);
    const its_feedbackBtn = target == feedbackBtn;
    const feedbackModal_is_active = feedbackModal.classList.contains('show');

    if (!its_feedbackModal && !its_feedbackBtn && feedbackModal_is_active) {
        hideFeedbackModal();
    }
});


document.addEventListener('click', e => {
    if(!e.target.classList.contains('.feedback-modal') 
    && e.target.dataset.name != 'aside-icons' 
    && e.target.dataset.name !== 'aside-icons-list') {
        aside.classList.remove('aside_show');
    }
});

feedbackBtn.addEventListener('click', () => {
    window.location= '#feedback';
    body.style.overflow = 'hidden';
    feedbackModal.classList.toggle('show');
    modalBg.classList.toggle('show');
    body.style.overflow = 'hidden';
});

feedbackModalExit.addEventListener('click', hideFeedbackModal);

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

const feedbackSlider = document.querySelector('.feedback-slider');

var swiperFeedback = new Swiper(feedbackSlider, {
  slidesPerView: 1,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  spaceBetween: 50,
  centerSlides: false,
  slideClass: 'feedback-slide',
  loop: true,
  navigation: {
    prevEl: '.feedback-slider__next'
  },
  breakpoints: {
    1248: {
      slidesPerView: 2,
    }
  }
});


  
