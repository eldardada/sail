const delivery = document.querySelector('.pay-delivary-choice');
const deliveryButton = document.querySelector('.pay-delivary>h2>input');
const payDataProducts = document.querySelector('.pay-data__products');
const payDataUser = document.querySelector('.pay-data__user');

deliveryButton.addEventListener('change', () => {
    delivery.classList.toggle('scale1');
});


payDataProducts.addEventListener('input', e => {
    const target = e.target;
    target.value = target.value.replace(/\D/g, '');
});


payDataProducts.addEventListener('change', e => {
    const target = e.target;
    if(target.value === '') target.value = 0;
    else if(target.value > 50) target.value = 50;
});


payDataUser.addEventListener('input', e => {
    const target = e.target;
    const id = target.id;
    if(id == 'phone') {
        target.value = target.value.replace(/[a-z, A-Z, а-я, А-Я]/g, '');
    }
});

payDataUser.addEventListener('input', e => {
    const target = e.target;
    const id = target.id;
    if(id == 'phone') {
        target.value = target.value.match(/[a-z, A-Z, а-я, А-Я]/g, '');
    }
});

payDataProducts.addEventListener('click', e => {
    const target = e.target;
    let div = target;

    while(!div.classList.contains('pay__sign')) {
        if(div.classList.contains('pay-data__products-count'))
            break;
        div = div.parentElement;
    }

    if(div.classList.contains('pay__sign')) {
        const parent = div.parentElement;
        const input = parent.querySelector('input');
        if(div.dataset.name == 'minus' && input.value > 0) {
            input.value -= 1;
        }
        else if (div.dataset.name == 'plus' && input.value < 50) {
            input.value = Number(input.value) + 1;
        }
    }
});



