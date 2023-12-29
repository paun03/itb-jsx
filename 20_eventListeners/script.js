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

});

// 7

let btnSquare = document.querySelector("#btnSquare");
let btnDividedBy2 = document.querySelector("#btnDividedBy2");
let btnSurface = document.querySelector("#btnSurface");

let pSquare = document.querySelector("#square");
let pDividedBy2 = document.querySelector("#dividedBy2");
let pSurface = document.querySelector("#surface");

let squareValue = document.querySelector("#squareValue");
let dividedValue = document.querySelector("#dividedValue")
let surfaceValue = document.querySelector("#surfaceValue")

btnSquare.addEventListener("click", () => {
    let getNum = squareValue.value;
    pSquare.textContent = `${getNum * getNum}`;
});

