// DOM

// VERSION 1

// 2

let allLi = document.querySelectorAll("li");
let ulZadaci = document.querySelector("ul");
let btnDodaj = document.querySelector("#submit");
let inputZadatka = document.querySelector("#task");

let nizZadataka = [];

if (localStorage.getItem("zadaci") == null) {
    localStorage.setItem("zadaci", JSON.stringify(nizZadataka))
} else {
    nizZadataka = JSON.parse(localStorage.getItem("zadaci"));
    for (let i = 0; i < nizZadataka.length; i++) {
        let li = document.createElement("li");
        li.textContent = nizZadataka[i];
        ulZadaci.appendChild(li);
    } 
}

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
        console.log(e.target.textContent);
        let indeksElementa = nizZadataka.indexOf(e.target.textContent);
        console.log(indeksElementa);
        nizZadataka.splice(indeksElementa, 1);
        localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
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
            nizZadataka.push(tekstZadatka);
            inputZadatka.value = "";
            } else {
                let li = document.createElement("li");
                li.innerText = `${tekstZadatka}`;
                ulZadaci.insertBefore(li, ulZadaci.firstChild);
                nizZadataka.unshift(tekstZadatka);
                inputZadatka.value = "";
            }
        }  
    };
    localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
});

