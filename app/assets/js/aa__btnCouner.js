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