let btnStart = document.querySelector("#btnStart");
let btnStop = document.querySelector("#btnStop");
let inputShow = document.querySelector("#inputShow");

let counter = 1;
let interval = null;

btnStart.addEventListener("click", (e) => {
    e.preventDefault();
    interval = setInterval(() => {
        inputShow.value = counter;
        counter++;
    }, 1000);
});

btnStop.addEventListener("click", (e) => {
    e.preventDefault();
    clearInterval(interval);
});
