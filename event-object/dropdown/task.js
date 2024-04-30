const list = Array.from(document.getElementsByClassName('dropdown__value'));
const listLink = Array.from(document.getElementsByClassName('dropdown__link'));

list.forEach(element => {
    element.addEventListener('click', function() {
        element.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
    });
});

listLink.forEach(element => {
    element.addEventListener('click', function(event) {
        element.closest('.dropdown').querySelector('.dropdown__value').textContent = element.textContent;
        element.closest('.dropdown__list').classList.remove('dropdown__list_active');
        event.preventDefault();
    });
});
