import Film from "./film.js";

let film1 = new Film("Čuvari Formule", "Dragan Bjelogrlić", 2023, [9, 10, 7, 6, 8, 9, 10]);
let film2 = new Film("Klopka", "Srđan Golubović", 2007, [10, 8, 9, 9, 10, 10]);
let film3 = new Film("Maratonci Trče Počasni Krug", "Slobodan Šijan", 1982, [9, 5, 9, 9, 9]);

let filmovi = [film1, film2, film3];

// 1

console.log("START OF 1");

for (let i = 0; i < filmovi.length; i++) {
    filmovi[i].štampaj();
};

// 2

console.log("START OF 2");

for (let i = 0; i < filmovi.length; i++) {
    console.log(filmovi[i].prosek());
};

// 3

console.log("START OF 3");

let vekFilmova = (arr, vek) => {
    let filmovi = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].godinaIzdanja >= (vek * 100 - 99) && arr[i].godinaIzdanja <= (vek * 100)) {
            filmovi.push(arr[i]);
        }
    }
    return filmovi;
}; 

console.log(vekFilmova(filmovi, 21));

// 4

console.log("START OF 4");

let prosecnaOcena = (arr) => {
    let suma = 0;
    let br = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].ocene.length; j++) {
            suma += arr[i].ocene[j];
            // br++; 
        }
        br += arr[i].ocene.length;
    }
    return suma / br;
};

console.log(prosecnaOcena(filmovi));

// 5

console.log("START OF 5");

let najcescaOcena = (arr) => {
    let br5 = 0;
    let br6 = 0;
    let br7 = 0;
    let br8 = 0;
    let br9 = 0;
    let br10 = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].ocene.length; j++) {
            if (arr[i].ocene[j] === 5) {
                br5++;
            } else if (arr[i].ocene[j] === 6) {
                br6++;
            } else if (arr[i].ocene[j] === 7) {
                br7++;
            } else if (arr[i].ocene[j] === 8) {
                br8++;
            } else if (arr[i].ocene[j] === 9) {
                br9++;
            } else if (arr[i].ocene[j] === 10) {
                br10++;
            }
        }
    }

    let brojOcena = [];

    brojOcena.push(br5);
    brojOcena.push(br6);
    brojOcena.push(br7);
    brojOcena.push(br8);
    brojOcena.push(br9);
    brojOcena.push(br10);

    let max = 0;
    let najcescaOcena = 0;

    for (let i = 0; i < brojOcena.length; i++) {
        if (max < brojOcena[i]) {
            max = brojOcena[i];
            najcescaOcena = i + 5;
        }
    }

    return najcescaOcena;

};

console.log(najcescaOcena(filmovi));

// 6

console.log("START OF 6");

let iznadOcene = (arr) => {
    let filmovi = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].prosek() > prosecnaOcena(arr)) {
            filmovi.push(arr[i].naslov);
        } 
    }
    return filmovi;
};

console.log(iznadOcene(filmovi));

// 7

console.log("START OF 7");

let iznadOceneNoviji = (arr, o) => {
    let film = {};
    let minGodinaIzdanja = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].prosek() > o && minGodinaIzdanja < arr[i].godinaIzdanja) {
            film = arr[i];
            minGodinaIzdanja = arr[i].godinaIzdanja;
        }
    }
    return film;
};

console.log(iznadOceneNoviji(filmovi, 8));

// 8

console.log("START OF 8");

let najboljeOcenjeni = (arr) => {
    let najboljeOcenjeniFilm = {};
    let najboljiProsek = arr[0].prosek();
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].prosek() > najboljiProsek) {
            najboljeOcenjeniFilm = arr[i];
        }
    }
    return najboljeOcenjeniFilm;
};

console.log(najboljeOcenjeni(filmovi));

// 9 

console.log("START OF 9");

let osrednjiFilm = (arr) => {
    let osrednjiFilm = {};
    let razlika = 0;
    let minRazlika = Infinity;
    for (let i = 0; i < arr.length; i++) {
        razlika = Math.abs(arr[i].prosek() - prosecnaOcena(arr));
        if (razlika < minRazlika) {
            minRazlika = razlika;
            osrednjiFilm = arr[i];
        }   
    }
    return osrednjiFilm;
};

console.log(osrednjiFilm(filmovi));

// 10

console.log("START OF 10");

let najmanjaOcenaNajboljeg = (arr) => {
    let najboljeOcenjeniFilm = najboljeOcenjeni(arr);
    let min = Infinity;
    for (let i = 0; i < najboljeOcenjeniFilm.ocene.length; i++) {
        if (najboljeOcenjeniFilm.ocene[i] < min) {
            min = najboljeOcenjeniFilm.ocene[i];
        }
    }
    return min;
};

console.log(najmanjaOcenaNajboljeg(filmovi));

// 11

console.log("START OF 11");

let najmanjaOcena = (arr) => {
    let najmanjaOcena = Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].ocene.length; j++) {
            if (najmanjaOcena > arr[i].ocene[j]) {
                najmanjaOcena = arr[i].ocene[j];
            }
        }
    }
    return najmanjaOcena;
};

console.log(najmanjaOcena(filmovi));