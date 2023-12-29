let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10, 0]
};

let dan2 = {
    datum: "2023/12/24",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3]
};

let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [3, 4, 6, 6, 7, 5, 4, 3]
};

let dani = [dan1, dan2, dan3];

// 2

let najvišeMerenja = (arr) => {
    let maksMerenja = 0;
    let datumMerenja = "";
    arr.forEach(e => {
        if (e.temperature.length > maksMerenja) {
            maksMerenja = e.temperature.length; 
            datumMerenja = e.datum;
        };
    });
    return datumMerenja;
};

console.log("START OF 2");
console.log(najvišeMerenja(dani));

// 3

let kolikoJeBiloDana = (a) => {
    let brojKišnih = 0;
    let brojSunčanih = 0;
    let brojOblačnih = 0;
    a.forEach(d => {
        if (d.kisa == true) {
            brojKišnih++;
        }
        if (d.sunce == true) {
            brojSunčanih++;
        }
        if (d.oblacno == true) {
            brojOblačnih++;
        }
    });
    return [brojKišnih, brojOblačnih, brojSunčanih];
}

console.log("START OF 3");
console.log(kolikoJeBiloDana(dani));

// 4

let daniSaNatprosečnomTemperaturom = (arr) => {
    let globalProsek = 0;
    let globalBr = 0;
    let globalSum = 0;
    arr.forEach(e => {
        e.temperature.forEach(t => {
            globalSum += t;
            globalBr++;
        });
    });
    globalProsek = globalSum / globalBr;
    let brDana = 0;
    arr.forEach(e => {
        let indProsek = 0;
        let indSum = 0;
        e.temperature.forEach(t => {
            indSum += t;
        });
        indProsek = indSum / e.temperature.length;
        if (indProsek > globalProsek) {
            brDana++;
        };
    });
    return brDana;
};

console.log("START OF 4");
console.log(daniSaNatprosečnomTemperaturom(dani));
