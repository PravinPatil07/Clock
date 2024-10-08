let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime () {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    console.log(`hour : ${h} , min : ${m} , sec: ${s}`);
    

    let hourRotation = 30*h + m/2;
    let minRotation = 6*m;
    let secRotation = 6*s;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`
}

setInterval(displayTime,1000)