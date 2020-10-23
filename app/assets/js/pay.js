const pay = document.querySelector('.pay');

if(pay) {
    const delivery = document.querySelector('.pay-delivary-choice');
    const deliveryButton = document.querySelector('.pay-delivary>h2>input');
    const payDataProducts = document.querySelector('.pay-data__products');
    const payDataUser = document.querySelector('.pay-data__user');

    btnClickAnimation(payDataProducts, '.pay-data__products-count', '.pay__sign', '[data-name="plus"]');
    
    
    deliveryButton.addEventListener('change', () => {
        delivery.classList.toggle('scale1');
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


    const payPay = document.querySelector('.pay-pay');
    const payMethods = payPay.querySelectorAll('input[data-name="pay_method"]');
    const payDelivary = document.querySelector('.pay-delivary');
    const payСities = payDelivary.querySelectorAll('input[data-name="pay_city"]');

    function deleteChecked(array) {
        array.forEach(input => {
            input.checked = false;
        });
    }

    payPay.addEventListener('change', e => {
        const target = e.target;
        if(target.dataset.name === 'pay_method') {
            if(target.checked) {
                deleteChecked(payMethods);
                target.checked = true;
            }
        }
    });

    payDelivary.addEventListener('change', e => {
        const target = e.target;
        if(target.dataset.name === 'pay_city') {
            if(target.checked) {
                deleteChecked(payСities);
                target.checked = true;
            }
        }
    });
}


