// 1

let hours = 23;
let minutes = 10;

let fromMidnight = hours * 60 + minutes;

console.log(fromMidnight);

// 1.1

let toMidnight = 24 * 60 - fromMidnight;

console.log(toMidnight);

// 2

let minutesAfterMidnight = 15;

hours = Math.floor(minutesAfterMidnight / 60);
minutes = minutesAfterMidnight % 60;

console.log(hours, minutes);

// 3

x = 1000; // novčanica
y = 250; // račun
z = x - y; // kusur

console.log(z);

// 4 

const date = new Date ();
date.getHours();
date.getMinutes();

fromMidnight = date.getHours() * 60 + date.getMinutes();
console.log(fromMidnight);

// 5


// 6

let eur = 60; // euros
let eurCourse = 117.29 // din - eur exc

din = eur * eurCourse; // dinars
console.log(din);

// 6.1

let moneyDin = 5000;
let moneyEur = moneyDin / eurCourse;
console.log(moneyEur);

// 7

// first conversion eur --> dol (din)

let amountEur = 100;
let courseDol = 106.79;

let amountDin = amountEur * eurCourse;
let amountDol = amountDin / courseDol;
console.log(amountDol);

// second conversion dol --> eur (din)

amountDol = 100;
courseDol = 106.79;

amountDin = amountDol * courseDol;
amountEur = amountDin / eurCourse;
console.log(amountEur);

// 8 

let c = 100;
let f;

f = c * 1.8 + 32;
console.log(f);

// 

f = 100;

c = (f - 32) / 1.8;
console.log(c);

// 9

c = 100;
let k;

k = c + 273.15;

console.log(k);

// 

k = 100;

c = k - 273.15;

console.log(c);

