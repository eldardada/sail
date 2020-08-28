const catalogFilter = document.querySelector('.catalog-filter');

catalogFilter.addEventListener('click', e => {
    if(e.target.tagName === 'svg') {
        e.target.classList.toggle('arrow_180');
        e.target.parentElement.classList.toggle('catalog_show-list');
    } 
});

(function(){
	const ratingBlocks = document.querySelectorAll('.rating');
    
    ratingBlocks.forEach(element => {
        let items = element.querySelectorAll('.rating-item');
        element.addEventListener('click', e => {
            if(!e.target.classList.contains('rating_active'))
            {
                items.forEach(function(item){
                    item.classList.remove('rating_active');
                });
                e.target.classList.add('rating_active');
            }
        });
    });
})();
