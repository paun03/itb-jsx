// 15

let t = -25;

if (t < -15 || t > 40 ) {
    console.log("Ekstremna Temperatura");
}

else {
    console.log ("Normalna Temperatura")
}

// 15.2 

if (t>=-15 && t<=40) {
    console.log("Normalna Temperatura");
} else {
    console.log("Ekstremna Temperatura");
}

// 16

let date = new Date();
let year = date.getFullYear();

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log("Prestupna");
} else {
    console.log("Nije Prestupna");
}


// 17

let o_workday = 9;
let c_workday = 20;

let o_weekend = 10;
let c_weekend = 18;

let day = date.getDay();
let hours = date.getHours();

if (((hours >= 9) && (hours < 20)) && ((day != 6) && (day != 0))) {
    console.log("Open");
}

else if (((hours >= 10) && (hours < 18)) && ((day == 6) || (day == 0))) {
    console.log("Open"); 
} 

else {
    console.log("Closed");
}

// 18

let x = 14;
let y = 12;
let z = 18;

let biggest = x;


// A

if (y > biggest) {
    biggest = y;
}

if (z > biggest) {
    biggest = z;
}

console.log(biggest);

// B 

if (biggest < y) {
    y = biggest;
} else if (biggest < z) {
    z = biggest;
}

else {
    x = biggest;
}

console.log(biggest);

// C 

if (x > y) {

    if(x > z) {

        console.log(x);
    }
}

if (y > x) {
    
    if (y > z) {

        console.log(y);
    }
}

else {

    console.log(z);
}

// D 

if ((x > y) && (x > z)) {
    console.log(x);
} 
else if ((y > z) && (y > x)) {
    console.log(y);
}

else {
    console.log(z);
}

