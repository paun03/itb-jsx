class Pacijent {
    constructor(ime, visina, tezina) {
        this.ime = ime;
        this.visina = visina;
        this.tezina = tezina;
    }

    set ime(ime) {
        this._ime = ime;
    }

    set visina(visina) {
        if (visina > 250 || visina < 0) {
            this._visina = "ERROR";            
        } else {
            this._visina = visina;
        }
    }

    set tezina(tezina) {
        if (tezina > 550 || tezina < 0) {
            this._tezina = "ERROR";
        } else {
            this._tezina = tezina;
        }
    }

    get ime() {
        return this._ime;
    }

    get visina() {
        return this._visina;
    }

    get tezina() {
        return this._tezina;
    }

    stampaj() {
        return (`Ime: ${this.ime}, Visina: ${this.visina}, Tezina: ${this.tezina}`);
    }

    bmi() {
        let bmi = this._tezina / (this.visina / 100) ** 2;
        return bmi;
    }

    kritican() {
        if (this.bmi() < 15 || this.bmi() > 40) {
            return true;
        } else {
            return false;
        }
    }

}

export default Pacijent;