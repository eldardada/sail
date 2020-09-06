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
        while(!div.dataset.name) 
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


cardAddCheckInputs = document.querySelectorAll('.card-info-add__block-check>input');
cardAddCheckLists = document.querySelectorAll('.card-info-add__block-check>ul');

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
        const mainParrent = divParent.parentElement;

        if(mainParrent.querySelector('.card-info-add__block-check input').checked){
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
        const input = div.querySelector('input');
        const label = div.querySelector('label');
        const list = div.querySelector('ul');
        const itListElement = list.contains(target) && target != list;
        const arrow = div.querySelector('#catalogFilterArrow');

        const itLabel = target.tagName == 'LABEL';
        
        if(itListElement) {
            label.innerHTML = target.innerHTML;
            input.checked = true;
            list.style.transform = 'scaleY(0)';
            arrow.classList.remove('arrow_180');
            cardAddCheckInputs.forEach(AddInput => {
                if(AddInput != input) {
                    let parrentInput = AddInput.parentElement;
                    let ul = parrentInput.querySelector('ul');
                    ul.style.transform = 'scaleY(0)';
                } 
            });
        }
        else if(itLabel && input.checked) {
            input.checked = false;
            arrow.classList.remove('arrow_180');
            label.innerHTML = label.dataset.content;
        }
        else if(!input.checked) {
            text = label.innerHTML;
            list.style.transform = 'scaleY(1)';
            arrow.classList.add('arrow_180');
            cardAddCheckInputs.forEach(AddInput => {
               
                if(AddInput != input) {
                    let parrentInput = AddInput.parentElement;
                    let ul = parrentInput.querySelector('ul');
                    ul.style.transform = 'scaleY(0)';
                } 
            });
        }
        else if(list.style.transform != 'scaleY(1)') {
            input.checked = false;
            list.style.transform = 'scaleY(1)';
            arrow.classList.add('arrow_180');
            cardAddCheckInputs.forEach(AddInput => {
               
                if(AddInput != input) {
                    let parrentInput = AddInput.parentElement;
                    let ul = parrentInput.querySelector('ul');
                    ul.style.transform = 'scaleY(0)';
                } 
            });
        }
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

// feedback

const feedbackBlock = document.querySelector('.feedback');

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

document.addEventListener('click', e => {
    const target = e.target;
    if(!cardInfoAdd.contains(target)) {
        cardAddCheckLists.forEach(list => {
            list.style.transform = 'scaleY(0)';
        });
    }
});

