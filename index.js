
let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function updateTimer() {
    document.getElementById("hr").textContent = String(hours).padStart(2, "0");
    document.getElementById("min").textContent = String(minutes).padStart(2, "0");
    document.getElementById("sec").textContent = String(seconds).padStart(2, "0");
}

function start() {
    timer = setInterval(function () {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        updateTimer();
    }, 1000);

    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false;
}

function stop() {
    clearInterval(timer);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}

function reset() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimer();
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}

updateTimer();
