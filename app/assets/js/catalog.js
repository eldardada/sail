const catalogFilter = document.querySelector('.catalog-filter');
const catalogBlocks = document.querySelector('.catalog-blocks');

// filter
catalogFilter.addEventListener('click', e => {
    const target = e.target;
    if(e.target.tagName === 'svg') {
        target.classList.toggle('arrow_180');
        target.parentElement.classList.toggle('catalog_show-list');
    }
    else if(target.classList.contains('select__element')) {
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


const catalogFilterElement = document.querySelector('.catalog_filter');

if(window.innerWidth <= 960) {
    const catalogFilterCp = catalogFilter.cloneNode(true);
    const params = catalogFilterCp.querySelectorAll('.catalog-filter__param:not(.catalog_filter)');
    const ul = document.createElement('ul');
    params.forEach(element => {
        ul.appendChild(element);
    });
    catalogFilterElement.appendChild(ul);
    wasCheck = true;
}

catalogFilterElement.addEventListener('click', e => {
    target = e.target;
    if(e.target.dataset.name === 'filter')
    catalogFilterElement.classList.toggle('filter_js');
});



