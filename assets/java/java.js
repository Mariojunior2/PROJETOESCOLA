const hora = document.querySelector('#hora');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hora.innerHTML = `${formatTime(hours)}`;
    min.innerHTML = `${formatTime(minutes)}`;
    sec.innerHTML = `${formatTime(seconds)}`;
}, 1000);

function formatTime(time){
    return time < 10 ? "0" + time : time;
}