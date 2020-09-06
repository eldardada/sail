const catalog = document.querySelector('.catalog');

if(catalog) {

const catalogFilter = document.querySelector('.catalog-filter');
const catalogBlocks = document.querySelector('.catalog-blocks');
const filterParams = document.querySelectorAll('.catalog-select');

function hideFilterLists() {
    filterParams.forEach(filter => {
        if(filter.classList.contains('filter-open')) {
            filter.classList.remove('filter-open');
        }
    });
};
// filter
catalogFilter.addEventListener('click', e => {
    const target = e.target;
    const catalogSelect = document.querySelector('.catalog-filter:not(.catalog_filter)');
    const itCatalogParam = (catalogSelect == target || catalogSelect.contains(target)) && !target.classList.contains('catalog_filter');
    const itSelectElement = target.classList.contains('select__element');
    if(itCatalogParam){
        const div = target.closest('.catalog-select');
        if(itSelectElement) {
            const dataActive = target.dataset.value;
            const dataText = target.innerHTML;
            const p = div.querySelector('.catalog-select__check');
            p.innerHTML = dataText;
            p.dataset.value = dataActive;
            hideFilterLists();
        }
        else {
            hideFilterLists();
            div.classList.add('filter-open');
        }
    }   
});

document.addEventListener('click', e => {
    const target = e.target;
    if(!catalogFilter.contains(target)) {
        hideFilterLists();
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
}
