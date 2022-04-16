function clickBtn() {
    document.getElementById('start-btn').click();
}

function setClock() {
    const time_div = document.getElementById('time');
    const date_div = document.getElementById('date');

    const dateInfo = new Date(); 
    const hour = modifyNumber(dateInfo.getHours());
    const min = modifyNumber(dateInfo.getMinutes());
    const year = dateInfo.getFullYear();
    const month = dateInfo.getMonth() + 1;
    const date = dateInfo.getDate();
    
    time_div.innerHTML = `${hour}<span class='blink'>:</span>${min}`;
    date_div.innerHTML = `${year} ${month} ${date}`;
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

function modifyNumber(time) {
    if (parseInt(time) < 10){
        return `0${time}`;
    } else return time;
}

window.onload = () => {
    setClock();
    muteController();
    setInterval(setClock, 1000);
}