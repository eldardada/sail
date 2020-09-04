const catalogFilter = document.querySelector('.catalog-filter');
const catalogBlocks = document.querySelector('.catalog-blocks');

// filter
catalogFilter.addEventListener('click', e => {
    const target = e.target;
    const itCatalogParam = target.classList.contains('catalog-filter__param');
    const itSelectElement = target.classList.contains('select__element');
    
    if(target != catalogFilter){
        if(itSelectElement) {
            const dataActive = target.dataset.value;
            const dataText = target.innerHTML; 
            const ul = target.parentElement;
            const div = ul.parentElement;
            const arrow = div.querySelector('svg'); 
            const p = div.querySelector('.catalog-select__check');
            p.innerHTML = dataText;
            p.dataset = dataActive;
            div.classList.toggle('catalog_show-list');
            arrow.classList.toggle('arrow_180');
        }
        else if(itCatalogParam) {
            const arrow = target.querySelector('#catalogFilterArrow');
            arrow.classList.toggle('arrow_180');
            target.classList.toggle('catalog_show-list');
        }
        else if(!itCatalogParam) {
            let div = target.parentElement;
            while(!div.classList.contains('catalog-filter__param')) div = div.parentElement;
            const arrow = div.querySelector('#catalogFilterArrow');
            arrow.classList.toggle('arrow_180');
            div.classList.toggle('catalog_show-list');
        }
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




