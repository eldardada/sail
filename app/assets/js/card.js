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

