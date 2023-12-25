let dan1 = {
    datum: "2023/12/22",
    kiša: true,
    sunce: false,
    oblačno: true,
    temperature: [3, 4, 6, 7, 24, 4],
    // 1
    prosečnaTemperatura: function() {
        let suma = 0;
        this.temperature.forEach(t => {
            suma += t;
        });
        return suma / this.temperature.length;
    },
    // 2
    brNatprosečnih: function() {
        let br = 0;
        this.temperature.forEach(t => {
            if(t > this.prosečnaTemperatura()) {
                br++;
            }
        });
        return br;
    },
    // 3
    brMaks: function() {
        let maks = this.temperature[0];
        this.temperature.forEach(t => {
            if (maks < t) {
                maks = t;
            }
        });
        let br = 0;
        this.temperature.forEach(t => {
            if (maks === t) {
                br++;
            }
        });
        return br;
    },
    // 4
    brIzmeđuDve: function(a, b) {
        let brMerenja = 0;
        for (let i = 0; i < this.temperature.length; i++) {
            if (i > a && i < b) {
                brMerenja++;
            }
        }
        return brMerenja;
    },
    // 5
    većinaDanaIznadProseka: function() {
        let polovinaMerenja = this.temperature.length / 2;
        let br = 0;
        this.temperature.forEach (t => {
            if (t > this.prosečnaTemperatura()) {
                br++;
            }
        });
        if (br > polovinaMerenja) {
            return true;
        } else {
            return false;
        };
    },
    // 6
    daLiJeLeden: function() {
        let leden = true;
        this.temperature.forEach(t => {
            if (t > 0) {
                leden = false;
            } 
        });
        return leden;
    },
    // 8
    daLiJeDanNepovoljan: function() {
        let nepovoljan = false;
        for (let i = 0; i < this.temperature.length; i++) {
            for (let j = i + 1; j < this.temperature.length - 1; j++) {
                if ((Math.abs(this.temperature[j] - this.temperature[i])) > 8) {
                    nepovoljan = true;;
                }
            }
        }
        return nepovoljan;
    }
};
console.log("1");
console.log(`Prosečna Temperatura: ${dan1.prosečnaTemperatura()}`);
console.log("2");
console.log(`Broj Natprosečnih Temperatura: ${dan1.brNatprosečnih()}`);
console.log("3");
console.log(`Broj Maksimalnih Temperatura: ${dan1.brMaks()}`);
console.log("4");
console.log(`Između: ${dan1.brIzmeđuDve(dan1.temperature[0], dan1.temperature[2])}`);
console.log("5");
console.log(dan1.većinaDanaIznadProseka());
console.log("6");
console.log(dan1.daLiJeLeden());
console.log("8");
console.log(dan1.daLiJeDanNepovoljan());