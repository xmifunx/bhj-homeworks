const revealBlocks = Array.from(document.getElementsByClassName('reveal'));

for (const revealBlock of revealBlocks) {
    window.addEventListener('scroll', function() {
        const monHeight = window.innerHeight;
        const topRevealBlock = revealBlock.getBoundingClientRect().top;

        if ((topRevealBlock < monHeight) && (topRevealBlock > 0)) {
            revealBlock.classList.add('reveal_active'); 
        } else {
            revealBlock.classList.remove('reveal_active');
        }
    });
}