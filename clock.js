const container = document.createElement('div');
container.setAttribute("class", "container");
const clock = document.createElement('div');
clock.setAttribute("class", "clock");
clock.setAttribute("id", "clock");
container.insertAdjacentElement("beforeend", clock);
document.querySelector('body').insertAdjacentElement("afterbegin", container);

const author = "Aid-Tech";
const BalH3 = document.createElement('h3');
BalH3.innerText = author;
document.getElementById("clock").insertAdjacentElement("beforeend", BalH3);

const circles = [ { id: "sc", color: "#04fc43" }, { id: "mn", color: "#fee800" }, { id: "hr", color: "#ff2972" } ];
circles.map((circle, index) => {
  const balDIV = document.createElement('div');
  balDIV.setAttribute("class", `circle ${index > 0 ? `circle${index+1}`: ""}`)
  balDIV.setAttribute("id", `${circle.id}`)
  balDIV.setAttribute("style", `--clr:${circle.color}`);
  const balI = document.createElement('i');
  balDIV.insertAdjacentElement("beforeend", balI);
  document.getElementById("clock").insertAdjacentElement("beforeend", balDIV);
});

const spans = [...Array(13).keys()]; 
spans.shift();
spans.map(span => {
  const balSPAN = document.createElement("span");
  balSPAN.setAttribute("style", `--i:${span}`);
  const balB = document.createElement("b");
  balB.innerText = `${span}`;
  balSPAN.insertAdjacentElement("beforeend", balB);
  document.getElementById("clock").insertAdjacentElement("beforeend", balSPAN);
});

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  document.getElementById("hr").style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
  document.getElementById("mn").style.transform = `rotateZ(${mm}deg)`;
  document.getElementById("sc").style.transform = `rotateZ(${ss}deg)`;
  document.querySelectorAll('b').forEach(b => {
    if (b.innerHTML == day.getHours()) {
      b.style.color = "#ff2972";
      b.style.opacity = "0.75"
    } else {
      b.style.color = "#fff";
      b.style.opacity = "0.25"
    }
  })
});
