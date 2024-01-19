console.log("1");
window.setTimeout(() => {
    console.log("Hello World!");
}, 3000);
console.log("2");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const div = document.querySelector("div");

let timer = null;

btn1.addEventListener("click", (e) => {
    e.preventDefault();
    let datum = new Date();
    let h = datum.getHours();
    let m = datum.getMinutes();
    let s = datum.getSeconds();
    if (timer === null) {
    timer = setTimeout(() => {
        div.textContent += `${h}:${m}:${s}`;
        timer = null;
    }, 2000);
    }
});

btn2.addEventListener("click", (e) => {
    e.preventDefault();
    clearTimeout(timer);
    timer = null;
});