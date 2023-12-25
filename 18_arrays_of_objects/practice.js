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

console.log("START OF 1");

let datumNajvišePutaIzmereneTemperature = (a) => {
    let maksMerenja = 0;
    let danSaNajvišeMerenja = "";

    a.forEach(d => {
        if (d.temperature.length = maksMerenja) {
            maksMerenja = d.temperature.length;
            danSaNajvišeMerenja = d.datum;
        }
    });

    return danSaNajvišeMerenja;
};

console.log(datumNajvišePutaIzmereneTemperature(dani));

// 2

console.log("START OF 2");

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

console.log(kolikoJeBiloDana(dani));

// 3

let kolikoDanaSaIznadprosečnomTemperaturom = (a) => {
    let prosek = 0;
    let suma = 0;
    let br = 0;
    let br1 = 0;

    a.forEach(d => {
        d.temperature.forEach(t => {
            suma += t;
            br++;
        });
    });

    prosek = suma / br;

    a.forEach(d => {
        let sumaDana = 0;

        d.temperature.forEach(t => {
            sumaDana += t;
        });
        let prosekDana = sumaDana / d.temperature.length;
        
        if (prosekDana > prosek) {
            br1++;
        }
    });

    return br1;
};

console.log(kolikoDanaSaIznadprosečnomTemperaturom(dani));