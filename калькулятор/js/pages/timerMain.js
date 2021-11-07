
let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("start");
let timerShow = document.getElementById("timer");
let buttonPause = document.getElementById("stop");
let stopTime;

buttonRun.addEventListener('click', function () {
    let timeMinut = stopTime || parseInt(timerInput.value) * 60;
    var timer = setInterval(function Start() {
        let seconds = timeMinut % 60
        let minutes = timeMinut / 60 % 60
        let hour = timeMinut / 60 / 60 % 60
        if (timeMinut <= 0) {
            clearInterval(timer);
            var sound = new Howl({
                src: ['../sound/Radar.mp3'],
                volume: 0.8
            });
            sound.play();

        } else {
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            timerShow.innerHTML = strTimer;
        }
        --timeMinut;
    }, 1000);

    buttonPause.addEventListener('click', function () {
        clearInterval(timer);
        stopTime = timeMinut;
    })


})
