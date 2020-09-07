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
    const itSelectElement = target.classList.contains('select__element');
    const div = target.closest('.catalog-select');
    if(div) {
        if(itSelectElement) {
            const dataActive = target.dataset.value;
            const dataText = target.innerHTML;
            const p = div.querySelector('.catalog-select__check');
            p.innerHTML = dataText;
            p.dataset.value = dataActive;
            hideFilterLists();
        }
        else if(div.classList.contains('filter-open')) {
            hideFilterLists();
        }
        else {
            hideFilterLists();
            div.classList.add('filter-open');
        }
    }
    else {
        hideFilterLists(); 
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
