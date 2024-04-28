const image = document.getElementById("cookie");

function clicker() {
    const counter = document.getElementById("clicker__counter");
    counter.textContent = Number(counter.textContent) + 1;
    if (counter.textContent % 2 == 1) {
        image.width = 250;
    } else {
        image.width = 150;
    }
}

image.onclick = clicker;