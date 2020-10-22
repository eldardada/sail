const basket = document.querySelector('.basket');

if(basket) {
    const basketModels = document.querySelector('.basket-models');
    let input;
    let btnCount;
    let btn;
    let itInc;
    let interval;
    let intervalCount 


    basketModels.addEventListener('input', e => {
        const target = e.target;
        
        if(target.dataset.name === 'input-count') {
            target.value = target.value.replace(/\D/g, '');
        }

    });

    basketModels.addEventListener('change', e => {
        const target = e.target;
        const value = target.value;

        if(target.dataset.name == 'input-count') {
            if(value === '') {
                target.value = 0;
                
            }
            else if(value > 50) {
                target.value = 50;
            }
        }
    });

    
    basketModels.addEventListener('mousedown', e => {
        const target = e.target;
        btnCount = target.closest('.btn_count');
        let bgMenuCount = target.closest('.basket-bgmenu-count');
        if(bgMenuCount) {
            input = target.closest('.basket-bgmenu-count').querySelector('input');
        }
        if(btnCount) {
            itInc = btnCount.classList.contains('btn_count_inc');
        }
        
        if(btnCount && counterValidate(input)) {
            btn = new btnCounter(btnCount);
            if(itInc) btn.startClickAnimation();
            else if(!itInc && input.value != 0) btn.startClickAnimation();
            
            let count = 0;

            intervalCount = setInterval(function() {
                count++;
                if(count == 3) {
                    if(itInc && input.value < 50) {
                        interval = setInterval(function() {
                            if(input.value < 50) input.value = Number(input.value) + 1;
                            else if(input.value == 50) btn.stopClickAnimation();
                        }, 100);
                        
                    }
                    else if(!itInc && input.value > 0) {
                        interval = setInterval(function() {
                            if(input.value > 0) input.value -= 1;
                            else if(input.value == 0) btn.stopClickAnimation();
                        }, 100);
                    }
                    
                }
            }, 100);

            setTimeout(function() {
                clearInterval(intervalCount);
            }, 300)

        }
    });
    
    basketModels.addEventListener('mouseup', e => {
        clearInterval(interval);
        
        if(intervalCount) {
            clearInterval(intervalCount);
        }
        
        if(btnCount) {
            if(counterValidate(input)) btn.stopClickAnimation();

            if(itInc && input.value < 50) 
                input.value = Number(input.value) + 1; 
            else if(!itInc && input.value > 0) 
                input.value -= 1; 
            
        }
    });
}

