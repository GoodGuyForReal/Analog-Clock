const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const date = document.getElementById('date')
const loc = document.getElementById('loc')
const user = document.getElementById('user')
const body = document.querySelector('body')
const container = document.querySelector('.container')
//Zone
// const api = 'http://worldtimeapi.org/api/ip';
// fetch(api)
//     .then((res) => res.json())
//     .then((data) => timezone(data))
//     .catch((err) => { console.log(err) });

// function timezone(data) {
//     const loc = document.getElementById('loc')
//     const { timezone } = data
//     loc.innerText = timezone;
// }

//DateTime
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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

    //Digital Clock
    let time = new Date;

    let saat = time.getHours();
    let dakika = time.getMinutes();
    let saniye = time.getSeconds();
    let twelve = saat - 12;
    if (saat < 12) {
        loc.innerHTML = `${twelve}:${dakika}:${saniye}AM`;
        user.innerHTML = ` <h1 class="welcometxt" id="welcometxt">Good <span class="spanimg"><img id="welcomeimg" class="welcomeimg"
        src="https://images.unsplash.com/photo-1598030716402-7431361d5cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""></span> Morning</h1>`;

    } else {
        loc.innerHTML = `${twelve}:${dakika}:${saniye}PM`;
        user.innerHTML = ` <h1 class="welcometxt" id="welcometxt">Good <span class="spanimg"><img id="welcomeimg" class="welcomeimg"
        src="https://images.unsplash.com/photo-1516166328576-82e16a127024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""></span> Evening</h1>`;
        body.style.backgroundColor = '#000004';
        body.style.color = 'white';
        container.style.backgroundColor = '#000004';
    }
}


function rotation(e, rr) {
    e.style.setProperty('--rotaten', rr * 360);
}
setInterval(clock, 1000)
clock();