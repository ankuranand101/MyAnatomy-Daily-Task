
const date = new Date();
console.log(date.getMinutes());
console.log(date.getHours());
console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getTime());



function updateClock(){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    const timeNow = (`${h}:${m}:${s}`);
    document.getElementById("time").textContent = timeNow;
}
setInterval(updateClock, 1000);
updateClock();