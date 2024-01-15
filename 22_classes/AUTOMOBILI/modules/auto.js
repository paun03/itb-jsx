class Auto {
    constructor(m, b, k) {
        this._marka = m;
        this._boja = b;
        this._imaKrov = k;
    }
    sviraj() {
        console.log(`Auto Marke ${this._marka} Beep! Beep!`);
    }

    set marka(m) {
        if (m.length > 0) {
            this._marka = m;
        } else {
            this._marka = "Škoda";
        }
        console.log("Pozvan je seter za polje _marka");
    }

    get marka() {
        return this._marka;
    }
};

export default Auto;