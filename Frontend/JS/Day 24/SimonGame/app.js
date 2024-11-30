let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;

let btns = ["yellow", "green", "purple", "red"];
let highestScore = 0;

let h2 = document.querySelector("h2");
let highScoreDisplay = document.querySelector(".high-score");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
    }
    started = true;
    levelUp();
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() * btns.length);
    let ranCol = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranCol}`);
    gameSeq.push(ranCol);
    gameFlash(ranBtn);
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        if (level > highestScore) {
            highestScore = level;
            highScoreDisplay.innerHTML = `Highest Score: <b>${highestScore}</b>`;
        }
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (const btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
