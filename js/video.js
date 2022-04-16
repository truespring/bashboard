function start() {
    document.getElementById('video_obj').play();
}

function setClock() {
    const time_div = document.getElementById('time');
    const date_div = document.getElementById('date');

    const dateInfo = new Date(); 
    const hour = modifyNumber(dateInfo.getHours());
    const min = modifyNumber(dateInfo.getMinutes());
    const year = dateInfo.getFullYear();
    const month = dateInfo.getMonth() + 1; //monthIndex를 반환해주기 때문에 1을 더해준다.
    const date = dateInfo.getDate();
    
    time_div.innerHTML = `${hour}<span class='blink'>:</span>${min}`;
    date_div.innerHTML = `${year} ${month} ${date}`;
}

function modifyNumber(time) {
    if (parseInt(time) < 10){
        return `0${time}`;
    } else return time;
}

window.onload = () => {
    setClock();
    setInterval(setClock, 1000);
}

start();