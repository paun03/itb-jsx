// 6

let date = new Date();
let day = date.getDay();

if (day < 6) {
    console.log("Workday");
}

else {
    console.log("Weekend");
}

// 7

let timeFromPc = new Date();
let hoursFromPc = timeFromPc.getHours();

if (hoursFromPc < 12) {
    console.log("Dobro Jutro");
}

else if (hoursFromPc < 18) {
    console.log("Dobar Dan");
}

else {
    console.log ("Dobro Veče");
}

// 8

let time = new Date();
let hours = time.getHours();

if (hours < 9) {
    console.log("Closed");
}

else if (hours >= 17) {
    console.log("Closed");
}

else {
    console.log("Open");
}

// 9

let doctorShift_start_1 = 12;
let doctorShift_end_1 = 20;

let doctorShift_start_2 = 18;
let doctorShift_end_2 = 2;

if (doctorShift_end_1 > doctorShift_start_2) {
    console.log("Smene se preklapaju");
}

else if (doctorShift_end_2 > doctorShift_start_1) {
    console.log("Smene se preklapaju");
} 

else {
    console.log("Smene se NE preklapaju");
}

// 10

let num1 = 10;
let num2 = 11;

if (num1 > num2) {
    console.log(num1 + 1);
    console.log(num2 - 1);
}

else if (num2 > num1) {
    console.log(num1 - 1);
    console.log(num2 + 1);
}

else {
    console.log("Equal");
}

// 11

let num = 11;

if (num % 1 == 0) {
    console.log("Ceo");
}

else {
    console.log("Decimalan");
}
