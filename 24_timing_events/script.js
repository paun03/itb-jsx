console.log("1");
window.setTimeout(() => {
    console.log("Hello World!");
}, 3000);
console.log("2");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
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
        div.textContent = `${h}:${m}:${s}`;
        timer = null;
    }, 2000);
    }
});

btn2.addEventListener("click", (e) => {
    e.preventDefault();
    clearTimeout(timer);
    timer = null;
});

let clock;

btn3.addEventListener("click", (e) => {
    e.preventDefault();
    if (clock === undefined) {
        clock = setInterval(() => {
            let datum = new Date();
            let h = datum.getHours();
            let m = datum.getMinutes();
            let s = datum.getSeconds();
            div.textContent = `${h}:${m}:${s}`;
        }, 1000);
    }
});

btn4.addEventListener("click", (e) => {
    e.preventDefault();
    clearInterval(clock);
    clock = undefined;
});