class Film {
    constructor(naslov, režiser, godinaIzdanja) {
        this.naslov = naslov;
        this.režiser = režiser;
        this.godinaIzdanja = godinaIzdanja;
    }

    set naslov(naslov) {
        this._naslov = naslov;
    }

    set režiser(režiser) {
        this._režiser = režiser;
    }

    set godinaIzdanja(godinaIzdanja) {
        if (godinaIzdanja < 1800) {
            this._godinaIzdanja = 1800; 
        } else {
            this._godinaIzdanja = godinaIzdanja;
        }
    }

    get naslov() {
        return this._naslov;
    }

    get režiser () {
        return this._režiser;
    }

    get godinaIzdanja() {
        return this._godinaIzdanja;
    }

    štampaj() {
        console.log(this.naslov);
    }
};

export default Film;

// let film1 = new Film("Openhaimer", "Christopher Nolan", 2023);
// film1.godinaIzdanja = 1799;
// console.log(film1);
// film1.štampaj();

// let film2 = new Film("Čuvari Formule", "Dragan Bjelogrlić", 2023);
// console.log(film2);
// console.log(`Film: ${film2.naslov}, Godina Izdanja: ${film2.godinaIzdanja}`);