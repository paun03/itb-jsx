// DOM

// VERSION 1

// 2

let allLi = document.querySelectorAll("li");
let ulZadaci = document.querySelector("ul");
let btnDodaj = document.querySelector("#submit");
let inputZadatka = document.querySelector("#task");

// 3

// VERSION 2

ulZadaci.addEventListener("click", (e) => {
    // console.log("click");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.tagName);
    if(e.target.tagName == "LI") {
        e.target.classList.toggle("precrtaj");
    };
});

ulZadaci.addEventListener("dblclick", (e) => {
    if(e.target.tagName == "LI") {
        ulZadaci.removeChild(e.target);
    };
});

btnDodaj.addEventListener("click", (e) => {
    e.preventDefault();
    let selektovaniRadio = document.querySelector("input[type='radio']:checked");
    console.log(selektovaniRadio);
    let tekstZadatka = inputZadatka.value;
    
    if (tekstZadatka !== "") {
        if (selektovaniRadio.id === "kraj") {
        let li = document.createElement("li");
        li.innerText = `${tekstZadatka}`;
        ulZadaci.appendChild(li);
        inputZadatka.value = "";
        } else {
            let li = document.createElement("li");
            li.innerText = `${tekstZadatka}`;
            ulZadaci.insertBefore(li, ulZadaci.firstChild);
            inputZadatka.value = "";
        }
    }
});

// 4

