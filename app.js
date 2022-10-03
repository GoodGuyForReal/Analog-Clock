const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const date = document.getElementById('date')

//Zone
const api = 'http://worldtimeapi.org/api/ip';
fetch(api)
    .then((res) => res.json())
    .then((data) => timezone(data))
    .catch((err) => { console.log(err) });

function timezone(data) {
    const loc = document.getElementById('loc')
    const { timezone } = data
    loc.innerText = timezone;
}

//DateTime
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const dateTime = new Date();
const daymonth = dateTime.getDate();
const month = months[dateTime.getMonth()];
const day = weekday[dateTime.getDay()];
date.innerText = `${daymonth} ${month}, ${day}`



//Clock
function clock() {
    const currentTime = new Date()
    const secondratio = currentTime.getSeconds() / 60;
    const minuteratio = (secondratio + currentTime.getMinutes()) / 60;
    const hourratio = (minuteratio + currentTime.getHours()) / 12;

    rotation(hour, hourratio)
    rotation(minute, minuteratio)
    rotation(second, secondratio)
}


function rotation(e, rr) {
    e.style.setProperty('--rotaten', rr * 360);
}
setInterval(clock, 1000)
clock();