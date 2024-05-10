const body = document.querySelector('body');
const links = document.querySelectorAll('a.has-tooltip');
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
body.appendChild(tooltip);
indexOfPrevious = 0;
index = 0;

links.forEach((elem, indexOfElement) => {
    elem.addEventListener('click', (event) => {

        event.preventDefault();

        tooltip.innerText = elem.getAttribute('title');
        tooltip.style.top = elem.getBoundingClientRect().bottom + 'px';
        tooltip.style.left = elem.getBoundingClientRect().left + 'px';

        if (indexOfPrevious != indexOfElement) {
            index = 1;
            tooltip.classList.add('tooltip_active');
        } else if (index == 1 ) {
            tooltip.classList.remove('tooltip_active');
            index = 0;
        } else {
            tooltip.classList.add('tooltip_active');
            index = 1;
        }
        
        indexOfPrevious = indexOfElement;
    })
})
