const catalogFilter = document.querySelector('.catalog-filter');
const catalogBlocks = document.querySelector('.catalog-blocks');

catalogFilter.addEventListener('click', e => {
    const target = e.target;
    if(e.target.tagName === 'svg') {
        const target = e.target;
        target.classList.toggle('arrow_180');
        target.parentElement.classList.toggle('catalog_show-list');
    }
    else if(target.classList.contains('select__element')) {
        const dataActive = target.dataset.value; // летит как data-active
        const dataText = target.innerHTML; // летит как текст
        const ul = target.parentElement;
        const div = ul.parentElement;
        const arrow = div.querySelector('svg'); 
        const p = div.querySelector('.catalog-select__check');
        p.innerHTML = dataText;
        p.dataset = dataActive;
        div.classList.toggle('catalog_show-list');
        arrow.classList.toggle('arrow_180');
    }
});

// Raiting
catalogBlocks.addEventListener('click', e => {
    const target = e.target;
    if(target.classList.contains('rating-item') && !target.classList.contains('rating_active')) {
        {
            const rating = target.parentElement;
            const items =  rating.querySelectorAll('.rating-item');
            items.forEach(item => {
                item.classList.remove('rating_active');
            });
            target.classList.add('rating_active');
        }
    }
});