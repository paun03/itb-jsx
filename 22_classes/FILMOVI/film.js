class Film {
    constructor(naslov, režiser, godinaIzdanja, ocene) {
        this.naslov = naslov;
        this.režiser = režiser;
        this.godinaIzdanja = godinaIzdanja;
        this.ocene = ocene;
    }   

    // SET

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

    set ocene(ocene) {
        for (let i = 0; i < ocene.length; i++) {
            if (ocene[i] > 10 || ocene[i] < 5 || ocene[i] !== Math.ceil(ocene[i])) {
                ocene[i] = 5;
            }
        }
        this._ocene = ocene;
    }

    // GET

    get naslov() {
        return this._naslov;
    }

    get režiser () {
        return this._režiser;
    }

    get godinaIzdanja() {
        return this._godinaIzdanja;
    }

    get ocene() {
        return this._ocene;
    }

    štampaj() {
        console.log(this.naslov);
    }

    prosek() {
        let suma = 0;
        for (let i = 0; i < this.ocene.length; i++) {
            suma += this.ocene[i];
        }
        return suma / this.ocene.length;
    }
};

export default Film;
