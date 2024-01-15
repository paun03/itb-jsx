import Film from "./film.js";

let film1 = new Film("Čuvari Formule", "Dragan Bjelogrlić", 2023);
let film2 = new Film("Klopka", "Srđan Golubović", 2007);
let film3 = new Film("Maratonci Trče Počasni Krug", "Slobodan Šijan", 1982);

let filmovi = [film1, film2, film3];

for (let i = 0; i < filmovi.length; i++) {
    filmovi[i].štampaj();
}

filmovi.forEach(e => {
    e.štampaj();
});