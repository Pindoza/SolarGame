let target = document.getElementById("target");
let score = 0;

function moveTarget() {
    let x = Math.random() * 560;
    let y = Math.random() * 360;

    target.style.left = x + "px";
    target.style.top = y + "px";
}

target.onclick = () => {
    score++;
    document.getElementById("score").innerText = score;
    moveTarget();
};

setInterval(moveTarget, 1000);
moveTarget();
