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

const cardCountInput = document.querySelector('.card-model__product-count input');

cardCountInput.addEventListener('input', () => {
    cardCountInput.value = cardCountInput.value.replace(/\D/g, '');
});

cardCountInput.addEventListener('change', () => {
    let value = cardCountInput.value;
    if(value === '') {
        value = 0;
    }
    else if(value > 50) {
        value = 50;
    }
    cardCountInput.value = value;
});

const cardModelCount = document.querySelector('.card-model__product-count>div');

cardModelCount.addEventListener('click', e => {
    target = e.target;

    if(target.hasAttribute('data-name')) {
        if(target.dataset.name == 'minus') {
            if(cardCountInput.value > 0) cardCountInput.value -= 1;
        }
        else if (target.dataset.name == 'plus') {
            if(cardCountInput.value < 50)
            cardCountInput.value = Number(cardCountInput.value) + 1;
        }
    }
    else {
        let div = target;
        while(!div.hasAttribute('data-name')) 
            div = div.parentElement;
        if(div.dataset.name == 'minus') {
            if(cardCountInput.value > 0) cardCountInput.value -= 1;
        }
        else if (div.dataset.name == 'plus') {
            if(cardCountInput.value < 50)
            cardCountInput.value = Number(cardCountInput.value) + 1;
        }
    }
});

const cardInfoAdd = document.querySelector('.card-info-add');

cardInfoAdd.addEventListener('click', e => {
    const target = e.target;

    if(target.classList.contains('.add__sign')) {
        
    }
    else {
        let div = target;

        while(!div.classList.contains('.add__sign')) {
            if(div.parentElement == cardInfoAdd) {
                break;
            }
            div = div.parentElement;
        }
        if(div.dataset.name == 'plus') {
            
        }

    }
});

