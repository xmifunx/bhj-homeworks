getHole = index => document.getElementById(`hole${index}`);

const deadMole = document.getElementById("dead");
const lost = document.getElementById("lost");

for ( let i = 1; i < 10; i++) {
    getHole(i).onclick = function() {
        hole = getHole(i);
        if (hole.className.includes("hole_has-mole")) {
            deadMole.textContent = Number(deadMole.textContent) + 1;
            if (deadMole.textContent == 5) {
                alert("Win!");
                deadMole.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent = Number(lost.textContent) + 1;
            if (lost.textContent == 10) {
                alert("Lose!");
                deadMole.textContent = 0;
                lost.textContent = 0;
            }
        }
    }
}