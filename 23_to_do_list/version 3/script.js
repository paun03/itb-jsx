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

// 5

inputZadatka.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        let selektovaniRadio = document.querySelector("input[type='radio']:checked");
        let tekstZadatka = inputZadatka.value;
    
        // 4
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
    };
});

localStorage.setItem("ulZadaci", ulZadaci);
console.log(localStorage);