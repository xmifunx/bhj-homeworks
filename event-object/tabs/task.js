const tab = Array.from(document.getElementById('tabs1').getElementsByClassName('tab'));
const tabContent = Array.from(document.getElementById('tabs1').getElementsByClassName('tab__content'));

tab.forEach((element) => {
    element.addEventListener('click', function() {
        const tabActive = document.querySelectorAll('div#tabs1.tabs > div.tab__navigation > div.tab.tab_active');
        const tabActiveContent = document.querySelectorAll('div#tabs1.tabs > div.tab__contents > div.tab__content.tab__content_active');

        if (tabActive.length != 0) {
            tabActive[0].classList.remove('tab_active');
        }
        if (tabActiveContent.length != 0) {
            tabActiveContent[0].classList.remove('tab__content_active');
        }

        const i = tab.indexOf(element);
        element.classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    });
});
