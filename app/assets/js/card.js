const card = document.querySelector('.card');

if (card) {
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
    const its_feedbackModal = target == feedbackModal || feedbackModal.contains(target);
    const its_feedbackBtn = target == feedbackBtn;
    const feedbackModal_is_active = feedbackModal.classList.contains('show');

    if (!its_feedbackModal && !its_feedbackBtn && feedbackModal_is_active) {
        hideFeedbackModal();
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
    const target = e.target;
    let div = target;
    while(!div.hasAttribute('data-name')) {
        if(div == cardModelCount) {
            break;
        }
        div = div.parentElement;
    }

    if(div.hasAttribute('data-name')) {
        if(div.dataset.name == 'minus') {
            if(cardCountInput.value > 0) cardCountInput.value -= 1;
        }
        else if (div.dataset.name == 'plus') {
            if(cardCountInput.value < 50)
            cardCountInput.value = Number(cardCountInput.value) + 1;
        }
    }
    else {
        let div = target;
        while(div.hasAttribute('data-name') == null) 
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


const cardMain = document.querySelector('.card_main');
if(cardMain) {
    const cardInfoAdd = document.querySelector('.card-info-add');


let cardAddChecks = document.querySelectorAll('.card-info-add__block-check');

function cardHideAllLists(div) {
    cardAddChecks.forEach(block => {
        if(block !== div)
            block.classList.remove('open');
    });
}

cardInfoAdd.addEventListener('click', e => {
    const target = e.target;
    
    let div = target;

    while(!div.classList.contains('add__sign') && !div.classList.contains('card-info-add__block-check')) {
        if(div == cardInfoAdd) {
            break;
        }
        div = div.parentElement;
    }

    if(div.classList.contains('add__sign')) {
        const divParent = div.parentElement;
        const mainParent = divParent.parentElement;

        if(mainParent.querySelector('.card-info-add__block-check input').checked){
            const input = divParent.querySelector('input');
            if(div.dataset.name == 'plus' && input.value < 50) {
                input.value = Number(input.value) + 1; 
            }
            else if(div.dataset.name == 'minus' && input.value > 0) {
                input.value -= 1;
            }
        }
    }
    // drop-down lists
    else if(div.classList.contains('card-info-add__block-check')) {
        const input = div.querySelector('label>input');
        const span = div.querySelector('label>span');
        const divOutput = div.querySelector('#add_content');
        const list = div.querySelector('ul');
        const itListElement = list.contains(target) && target != list;
        const itSpan = target == span || target == input;
        
        if(itListElement) {
            divOutput.innerHTML = target.innerHTML;
            input.checked = true;
            cardHideAllLists(null);
        }
        else if (!itSpan) {
            div.classList.add('open');
            cardHideAllLists(div);
        }
    }
});

cardInfoAdd.addEventListener('change', e => {
    const target = e.target;
    const div = target.parentElement.parentElement;
    const divOutput = div.querySelector('#add_content');
    const mainParent = target.closest('.card-info-add__block');
    const input = mainParent.querySelector('.card-info-add__block-count>input');

    if(!target.checked) {
        divOutput.innerHTML = divOutput.dataset.content;
        cardHideAllLists(null);
        input.value = 0;
    }
    else {
        if(divOutput.innerHTML == divOutput.dataset.content) {
            target.checked = false;
        }
        div.classList.add('open');
    }
});

cardInfoAdd.addEventListener('input', e => {
    const target = e.target;
    // plus / minus
    if(target.parentElement.classList.contains('card-info-add__block-count')) {
        target.value = target.value.replace(/\D/g, '');
    }
   
});

cardInfoAdd.addEventListener('change', e => {
    const target = e.target;
    if(target.parentElement.classList.contains('card-info-add__block-count')) {
       if(target.value === '') {
            target.value = 0;
       }
       else if (target.value > 50) {
            target.value = 50;
       }
    }
});

document.addEventListener('click', e => {
    const target = e.target;
    if(!cardInfoAdd.contains(target)) {
        cardHideAllLists(null);
    }
});
}
}


// feedback

const feedbackBlock = document.querySelector('.feedback');

if(feedbackBlock) {
    const feedbackSlider = document.querySelector('.feedback-slider');
    const simproductsSlider = document.querySelector('.simproducts-slider');
    feedbackSlider.addEventListener('click', e => {
        const target = e.target;
        if(target.hasAttribute('data-small')) {
            const feedbackBlock = target.closest('.feedback__block');
            
            if(target.innerHTML == 'Скрыть отзыв') {
                target.innerHTML = 'Читать дальше';
                const div = feedbackBlock.querySelector('div');
                div.scrollTop = 0;
            }
            else {
                target.innerHTML = 'Скрыть отзыв';
            }
            feedbackBlock.classList.toggle('feedback-block-active');
        }
    });

    simproductsSlider.addEventListener('click', e => {
        const target = e.target;
        if(target.hasAttribute('data-small')) {
            const slideFooter = target.closest('.simproducts-slide__footer');
            
            if(target.innerHTML == 'Скрыть информацию') {
                target.innerHTML = 'Подробнее';
                const div = slideFooter.querySelector('div');
                div.scrollTop = 0;
            }
            else {
                target.innerHTML = 'Скрыть информацию';
            }
            slideFooter.classList.toggle('feedback-block-active');
        }
    });

    feedbackBlock.addEventListener('click', e => {
        let target = e.target;
    
        if(!target.classList.contains('like') && !target.classList.contains('dislike')) {
          target = target.parentElement;  
        }
    
        if(target.classList.contains('like') || target.classList.contains('dislike')) {
            let div = target;
            
            while(!div.classList.contains('feedback-bgblock')) div = div.parentElement;
    
            if(target.classList.contains('like')) {
                div.querySelector('.dislike').style.fill = 'black';
                target.style.fill = 'green';
            }
            else if(target.classList.contains('dislike')) {
                div.querySelector('.like').style.fill = 'black';
                target.style.fill = 'red';
            }
        }
    });
}

const otherCardZabor = document.querySelector('.card-zabor');

if(otherCardZabor) {
    const cardZaborCount = document.querySelector('.card-model__product-count');
    const cardZaborInput = document.querySelector('.card-model__product-count input');
    const plus = cardZaborCount.querySelector('.plus');
    const minus = cardZaborCount.querySelector('.minus');

    cardZaborCount.addEventListener('click', e => {
        const target = e.target;
        if((plus.contains(target) || plus == target) && cardZaborInput.value < 50) {
            cardZaborInput.value = Number(cardZaborInput.value) + 1;
        }
        else if ((minus.contains(target) || minus == target) && cardZaborInput.value > 0) {
            cardZaborInput.value -= 1;
        }
    });

    cardZaborInput.addEventListener('input', e => {
        const target = e.target;
        // plus / minus
        if(target.parentElement.classList.contains('card-info-add__block-count')) {
            target.value = target.value.replace(/\D/g, '');
        }
       
    });
    
    cardZaborInput.addEventListener('change', e => {
        const target = e.target;
        if(target.parentElement.classList.contains('card-info-add__block-count')) {
           if(target.value === '') {
                target.value = 0;
           }
           else if (target.value > 50) {
                target.value = 50;
           }
        }
    });
}   