function clickBtn() {
    document.getElementById('start-btn').click();
}

const setClockDiv = () => {
    const timeDiv = document.querySelector('#time-div');
    const dateDiv = document.querySelector('#date-div');

    timeDiv.innerHTML = `
        <span id="hours"></span>
        <span class="blink">:</span>
        <span id="minutes"></span>
    `;

    dateDiv.innerHTML = `
        <span id="year"></span>
        &nbsp;
        <span id="month"></span>
        &nbsp;
        <span id="date"></span>
    `;
}

const watchClock = () => {
    function leftPad(number) {
        if (number < 10) {
            return `0${number}`;
        }

        return `${number}`;
    };

    function setText(selector, text) {
        const targetElement = document.querySelector(selector);

        if (!targetElement) {
            return;
        }

        targetElement.innerText = text;
    };

    const present = new Date();

    const hour = leftPad(present.getHours());
    const minute = leftPad(present.getMinutes());
    const seconds = leftPad(present.getSeconds());

    setText('#hours', hour);
    setText('#minutes', minute);

    const year = present.getFullYear();
    const month = leftPad(present.getMonth() + 1);
    const date = leftPad(present.getDate());

    setText('#year', year);
    setText('#month', month);
    setText('#date', date);
}

function muteController() {
    const time_zone = document.querySelector('.time-zone');
    time_zone.addEventListener('click', () => {
        let video_obj = document.getElementById('video_obj');
        video_obj.volume = 0.3;
        
        if (video_obj.muted) {
            document.getElementById('video_obj').muted = false;
        } else {
            document.getElementById('video_obj').muted = true;
        }
    });
}

window.onload = () => {
    setClockDiv();
    watchClock();
    muteController();
    setInterval(watchClock, 1000);
}