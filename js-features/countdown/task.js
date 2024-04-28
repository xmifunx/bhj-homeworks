const countdown = function(){
    const output = document.getElementById("timer");
    if (output.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(repeater);
    } else {
        output.textContent -= 1;
    }
}

repeater = setInterval(countdown, 1000);