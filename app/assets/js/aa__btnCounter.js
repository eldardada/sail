class btnCounter{
    constructor(owner) {
        if(typeof owner === 'string') {
            this.owner = document.querySelector(owner);
        }
        else {
            this.owner = owner;
        }
    }
    
    startClickAnimation() {
        this.owner.classList.add('active');
    }
    
    stopClickAnimation(time = 80) {
        setTimeout(() => {
            this.owner.classList.remove('active')
        }, time);
    }
    
}

function counterValidate(input) {
    return input.value < 50 && input.value >= 0;
}

function btnClickAnimation(parentBlock, btnsContainerSelector, btnSelector, btnIncSelector) {
    let input;
    let btnCount;
    let btn;
    let itInc;
    let interval;
    let intervalCount;

    parentBlock.addEventListener('input', e => {
        const target = e.target;
        target.value = target.value.replace(/\D/g, '');
    });

    parentBlock.addEventListener('change', e => {
        const target = e.target;
        const value = target.value;

        if(value === '') {
            target.value = 0;
            
        }
        else if(value > 50) {
            target.value = 50;
        }
    });

    parentBlock.addEventListener('mousedown', e => {
        const target = e.target;
        btnCount = target.closest(btnSelector);
        let countContainer = target.closest(btnsContainerSelector);
        let btnInc = countContainer.querySelector(btnIncSelector);

        if(countContainer) {
            input = countContainer.querySelector('input');
        }
        if(btnCount) {
            itInc = btnCount.contains(btnInc);
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
    
    parentBlock.addEventListener('mouseup', e => {
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