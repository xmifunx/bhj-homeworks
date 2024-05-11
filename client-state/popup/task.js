const modalClose = document.querySelector('.modal__close');
const subscribeModal = document.getElementById('subscribe-modal');

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(pair => pair.startsWith(name + '='));
    try {
        return cookie.substring(name.length + 1);
    } catch {
        return false;
    }
}

modalClose.addEventListener('click', function(event) {
    event.target.closest('.modal').classList.remove('modal_active');
    
    if (getCookie('subscribed') == 'true') {
        return false;
    } else {
        document.cookie ='subscribed=true';
    }
});

window.addEventListener('load', function() {
    if (getCookie('subscribed') == 'true') {
        return false;
    } else {
        subscribeModal.classList.add('modal_active'); 
    }
});