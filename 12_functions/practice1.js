// 3

function neparan(n) {
    let text = ``;
    if (n % 2 == 0) {
        text = `Broj Je Paran`;
    } else {
        text = `Broj Je Neparan`;
    }
    return text;
}

console.log(neparan(4));

// 4

function maks2(num1, num2) {

    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    }
}

console.log(maks2(4, 7));

function maks4(n1, n2, n3, n4) {
    let prvaDva  = maks2(n1, n2);    
    let drugaDva = maks2(n3, n4);

    return maks2(prvaDva, drugaDva);
} 

let n1 = 1;
let n2 = 2;
let n3 = 3;
let n4 = 4;

console.log(maks4(n1, n2, n3, n4));

// 5

// function prikaziSliku(adresa) {
//     document.write(`<img src="${adresa}">`);
// }
// prikaziSliku("https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg");

// 5a

// function prikaziSlikuUElementu(putanja, id) {
//     let element = document.getElementById(`${id}`);
//     element.innerHTML = `<img src = "${putanja}">`;    
// }

// prikaziSlikuUElementu("https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg", "slika1");

// 6

// function coloredParagraph(color, id) {
//     let element = document.getElementById(`${id}`);
//     element.style.color = `${color}`;
// }

// coloredParagraph(`red`, `par`);


// 7

function sedmiDan(n) {
    
        if (n % 7 == 0) {
            console.log(`Nedelja`);
        } else if (n % 7 == 1) {
            console.log(`Ponedeljak`);
        } else if (n % 7 == 2) {
            console.log(`Utorak`);
        } else if (n % 7 == 3) {
            console.log(`Sreda`);
        } else if (n % 7 == 4) {
            console.log(`Četvrtak`);
        } else if (n % 7 == 5) {
            console.log('Petak');
        } else if (n % 7 == 6) {
            console.log(`Subota`);
        }     
}

sedmiDan(26);

// 8

console.log(`START OF 8`);

function deljivSaTri(n, m) {
    let counter = 0;
    for (i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            counter++;
        } else {}
    }
    console.log(counter);
}

deljivSaTri(3, 12);

// 9

console.log(`START OF 9`);

function sumiraj(n, m) {
    let sum = 0;
    for (i = n; i <= m; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumiraj(20, 30));

// 10

console.log(`START OF 10`);

function mnozi(n, m) {
    let product = 1;
    for (i = n; i <= m; i++) {
        product = product * i;
    }
    return product;
}

console.log(mnozi(1, 4));

// 11

console.log(`START OF 11`);

function aritmeticka(n, m) {
    let arithmeticMean = 0;
    let counter = 0;
    let sum = 0;
    for (i = n; i <= m; i++) {
        counter++;
        sum = sum + i;
    }
    arithmeticMean = sum / counter;
    return arithmeticMean;
}

console.log(aritmeticka(1, 3));

// 12

console.log(`START OF 12`);

function aritmetickaTri (n, m) {
    let arithmeticMean = 0;
    let sum = 0;
    let counter = 0;
    for (i = n; i <= m; i++) {
        if (i % 10 == 3) {
            counter++;
            sum = sum + i;
        } else {}
    }
    arithmeticMean = sum / counter;
    return arithmeticMean;
}

console.log(aritmetickaTri(10, 13));

// 13

// function velicinaFonta(v) {
//     document.write(`<div style="font-size: ${v}px;">Hello, World!</div>`);
// }

// velicinaFonta(72);

// 14

function recenica5() {
    for (i = 10; i <= 30; i = i + 5) {
        document.write(`<div style="font-size: ${i}px;">Hello, World!</div>`);
    }
}

recenica5();

// 15

console.log(`START OF 15`);


// 15.1 

function poslednjaPlata (n, a, d) {
    let poslednjaPlata = 0;
    poslednjaPlata = a + (n - 1) * d;
    return poslednjaPlata;
    
}

console.log(poslednjaPlata(3, 60000, 5000));

// 15.2

function ukupnaPlata (n, a, d) {
    let ukupnaZarada = 0;
    for (i = 1; i <= n; i++) {
        ukupnaZarada = ukupnaZarada + a + d * (i - 1);
    }
    return ukupnaZarada; 
}

console.log(ukupnaPlata(3, 60000, 5000));

// 16

function igraBezGranica() {
    
}