// imenovane funkcije

function sum (a, b) {
    return a + b;
}

let rez = sum(1, 2);

console.log(rez);

// anonimne funkcije

let suma = function(a, b) {
    return a + b;
}

console.log(suma(1, 2));

// arrow funkcije

let suma2 = (a, b) => {
    return a + b;
}

console.log(suma2(1, 2));


let hello = () => {
    console.log(`Hello World!`);
}

hello();

let echo = (s1, s2) => {
    let result = s1 + `, ` + s2;
    console.log(result);
}

echo(`Hey`, `Hey`);

let m = 19;