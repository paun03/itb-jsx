// no callback

const a = [1, 3, 5, 7];
const b = ["Pera", "Mika", "Laza"];

function ispisNizaKonzola(niz) {
    let string = "";
    for (i = 0; i < niz.length; i++) {
        string += niz[i] + " ";
    }
    console.log(string);
}

ispisNizaKonzola(a);
ispisNizaKonzola(b);

function ispisNizaStranica (niz) {
    let string = "";
    for (i = 0; i < niz.length; i++) {
        string += niz[i] + " ";
    }
    let div = document.getElementById("container");
    div.innerHTML += string;
}

ispisNizaStranica(a);
ispisNizaStranica(b);

// callback

function ispisCon(p) {
    console.log(p);
}

function ispisDoc(p) {
    let div = document.getElementById("container");
    div.innerHTML += p;
}

function ispisNiza (niz, cb) {
    let string = "";
    for (i = 0; i < niz.length; i++) {
        string += niz[i] + " ";
    }
    cb(string);
}

ispisNiza(a, ispisCon);
ispisNiza(b, ispisCon);
ispisNiza(a, ispisDoc);
ispisNiza(b, ispisDoc);

ispisNiza([1, 2, 3, 4, 5], function(p) {
    console.log(p);
});

ispisNiza([9, 8, 7, 6], p => {
    console.log(p);
});

// forEach 

a.forEach(ispisCon);
b.forEach(ispisCon);
a.forEach(ispisDoc);
b.forEach(ispisDoc);

a.forEach (function(e) {
    console.log(e);
});

a.forEach(e => {
    let div = document.getElementById("container");
    div.innerHTML += e + " ";
});

a.forEach((e, i) => {
    console.log(`Element u ${e} ima index ${i}`);
});