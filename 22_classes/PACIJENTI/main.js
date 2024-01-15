import Pacijent from "./pacijent.js";

let pacijent1 = new Pacijent("Marko", 200, 80);
let pacijent2 = new Pacijent("Nebojša", 195, 120);
let pacijent3 = new Pacijent("Uroš", 180, 75);

// console.log(pacijent3.stampaj());
// console.log(pacijent3.bmi());
// console.log(pacijent3.kritican());

let pacijenti = [pacijent1, pacijent2, pacijent3];

// 1

let najmanjaTezina = (arr) => {
    let minTezina = Infinity;
    let pacijentSaNajmanjomTezinom = "";
    arr.forEach(e => {
        if (minTezina > e.tezina) {
            minTezina = e.tezina;
            pacijentSaNajmanjomTezinom = `${e.ime}, ${e.visina}, ${e.tezina}`;
        }
    });
    return pacijentSaNajmanjomTezinom;
};

console.log("1");
console.log(najmanjaTezina(pacijenti));

// 2

let najveciBMI = (arr) => {
    let najveciBMI = 0;
    let pacijentSaNajvecimBMI = "";
    arr.forEach(e => {
        if (najveciBMI < e.bmi()) {
            najveciBMI = e.bmi();
            pacijentSaNajvecimBMI = `${e.ime}, ${e.visina}, ${e.tezina}`;
        }
    });
    return pacijentSaNajvecimBMI;
};

console.log("2");
console.log(najveciBMI(pacijenti));

// 3

let sadrziSlovoA = (arr) => {
    let pacijenti = [];
    arr.forEach(p => {
        for (let i = 0; i < p.ime.length; i++) {
            if (p.ime[i] === "a" || p.ime[i] === "A") {
            pacijenti.push(p.ime);
            break;
            }
        }
    });
    return pacijenti;
};

console.log("3");
console.log(sadrziSlovoA(pacijenti));


// 4

let srednjaVisina = (arr) => {
    let sumaVisina = 0;
    arr.forEach (p => {
        sumaVisina += p.visina;
    });
    return sumaVisina / arr.length;
};

console.log("4");
console.log(srednjaVisina(pacijenti));