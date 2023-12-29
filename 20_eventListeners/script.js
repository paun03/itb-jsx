let btnHello = document.querySelector("#hello");

btnHello.addEventListener("click", () => {
    console.log("Hello!");
});

btnHello.addEventListener("dblclick", () => {
    console.log("Hello Hello!");
});

// 1

let btnCounter = document.querySelector("#counter");
let paragraphCounter = document.querySelector("#paragraph");
let c = 1;
btnCounter.addEventListener("click", () => {
    console.log(`${c}`);

    // 2

    paragraphCounter.innerHTML = `${c}`
    c++;
});

// 3, 4

let counter = 0;

let btnMinus = document.getElementById("btnMinus");
let counterSpan = document.getElementById("counterSpan");
let btnPlus = document.getElementById("btnPlus");

btnMinus.addEventListener("click", () => {
    counter--;
    if (counter < 0) {
        counter = 0;
    };
    counterSpan.textContent = counter;
});

btnPlus.addEventListener("click", () => {
    counter++;
    counterSpan.textContent = counter;
});

// 5

let inputText = document.querySelector("#text")
let btnWrite = document.querySelector("#btnWriteText");
let pWriteText = document.querySelector("#writeText");

btnWrite.addEventListener("click", () => {
    let getText = inputText.value;
    pWriteText.innerText = `Hello, ${getText}!`;
});

// 6

let btnForm = document.querySelector("#btnForm");
let genderPar = document.querySelector("#genderPar");

btnForm.addEventListener("click", () => {
    let selectedGender = document.querySelector('input[name="gender"]:checked');

    if (selectedGender) {
        genderPar.innerHTML = selectedGender.value;
    };

let genderRadios = document.getElementsByName("gender");
genderRadios.forEach(radioButton => {
    if (radioButton.checked) {
        console.log(`${radioButton.value}`);
    }
});

});

// 7

let btnRačun = document.querySelector("#btnRačun");
let btnPola = document.querySelector("#btnPola");
let btnPovršina = document.querySelector("#btnPovršina");

let inputRačun = document.querySelector("#inputRačun");
let inputPola = document.querySelector("#inputPola");
let inputPovršina = document.querySelector("#inputPovršina");

let pRačun = document.querySelector("#pRačun");
let pPola = document.querySelector("#pPola");
let pPovršina = document.querySelector("#pPovršina");

btnRačun.addEventListener("click", () => {
    pRačun.innerHTML = `${inputRačun.value ** 2}`;
});

btnPola.addEventListener("click", () => {
    pPola.innerHTML = `${inputPola.value / 2}`;
});

btnPovršina.addEventListener("click", () => {
    pPovršina.innerHTML = `${(inputPovršina.value ** 2) * Math.PI}`;
});

// 8

