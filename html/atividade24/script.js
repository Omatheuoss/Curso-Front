var sec = 0;
var min = 0;
var hr = 0;
var interval;
var running = false;

function start() {
    if (!running) {
        interval = setInterval(watch, 10);
        running = true;
    }
}

function parar() {
    clearInterval(interval);
    running = false;
}

function reder() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    hr = 0;
    running = false;
    document.getElementById('watch').innerText = '00:00:00';
    var markList = document.getElementById('mark-list');
    markList.innerHTML = '';
}

function watch() {
    sec++;
    if (sec == 100) {
        min++;
        sec = 0;
    }
    if (min == 60) {
        hr++;
        min = 0;
    }
    document.getElementById('watch').innerText = formatTime(hr, min, sec);
}

function formatTime(hours, minutes, seconds) {
    return (
        hours.toString().padStart(2, '0') +
        ':' +
        minutes.toString().padStart(2, '0') +
        ':' +
        (seconds / 100).toFixed(2).toString().substr(2).padStart(2, '0')
    );
}
