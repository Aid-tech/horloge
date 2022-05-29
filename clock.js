let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(()=>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    let hour = document.querySelector("#hour");
    let munites = document.querySelector("#munites");
    let seconds = document.querySelector("#seconds");
    let ampm = document.querySelector("#ampm");

    let h = day.getHours();
    let m = (day.getMinutes() < 10) ? `0${day.getMinutes()}` : day.getMinutes();
    let s = (day.getSeconds() < 10) ? `0${day.getSeconds()}` : day.getSeconds();

    let am = h >= 12 ? "PM" : "AM";
    h = (h > 12) ? h - 12 : h;
    h = (h < 10) ? `0${h}` : h;
    hour.innerHTML = h;
    munites.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
});