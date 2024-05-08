const rotatorBlocks = Array.from(document.getElementsByClassName('rotator'));

rotatorBlocks.forEach(element => {
    const rotators = element.querySelectorAll('.rotator__case');
    var count = 0;
    var interval = rotators[count].dataset.speed;
    var colorOfRotator = rotators[count].dataset.color;
    rotators[count].style.color = colorOfRotator;

    setTimeout(rotation, interval);

    function rotation() {
        rotators[count].classList.remove('rotator__case_active');
        ++count;
        
        if (count === rotators.length) count = 0;

        interval = rotators[count].dataset.speed;
        rotators[count].classList.add('rotator__case_active');
        colorOfRotator = rotators[count].dataset.color;
        rotators[count].style.color = colorOfRotator;

        setTimeout(rotation, interval); 
    }
});