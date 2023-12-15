function hello() {
    console.log(`Hello World!`);
}
hello();

function writeText(text) {
    console.log(text);    
}
writeText(`TEXT TEXT TEXT`);
writeText(`MORE TEXT`);

function nameSurname(name, surname) {
    console.log(`${name} ${surname} is logged in.`);
}

nameSurname(`John`, `Doe`);

let firstName = `John`;
let lastName = `Doe`;
nameSurname(firstName, lastName);

function sum(num1, num2) {
    let result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
}

sum(1, 2);
sum(`Java`, `Script`);

function razlika(umanjenik, umanjilac) {
    let razlikaRezultat = umanjenik - umanjilac;
    return razlikaRezultat;
}

console.log(`Razlika je ${razlika(60, 45)}`);
let r = razlika(100, 4);
console.log(r);

let r1 = razlika(6, 3); // 3
let r2 = razlika(17, 7); // 10
let r3 = razlika(r1, r2); // -7
console.log(r3);
let r4 = razlika(razlika(40, 60), razlika(10, 4));
console.log(r4);