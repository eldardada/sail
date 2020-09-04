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