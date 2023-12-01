let a = 5;
let b = 5;

if (a > 5) {
    console.log ("a is larger than b");
}

else {
    console.log("a either holds the same or smaller value than b");
}

// 1

let z = 70;

if (z <= 100) {
    // document.write("<p style=\"color: green;\">Pack Up</p>");
}
else {
    // document.write("<p style='color: red;'>Throw Away</p>");
}

// 2

let temp = -20;

if (temp >= 0) {
    // document.write("<p style=\"color: red;\">Positive</p>");
    let p = document.getElementById("temp");
    p.innerHTML = "Positive";
    p.style.color = "red";
}

else {
    // document.write("<p style=\"color: blue;\">Negative</p>");
    let p = document.getElementById("temp");
    p.innerHTML = "Negative";
    p.style.color   = "blue";
}

// 3

let curYear = new Date().getFullYear();
let birYear = 2015;
let age = curYear - birYear;

if (age >= 18) {
    document.write('<img src="https://candybarsydney.com.au/web/image/product.template/61626/image_1024?unique=91441ea" alt="">');
}

else {
    document.write("You have to wait " + (18 - age) + " more year/years to celebrate 18th birthday.");
}

// 4

let hourTime = new Date().getHours();

if (hourTime >= 12) {
    document.write("<p>PM</p>");
}

else {
    document.write("<p>AM</p>");
}

// 5

let gender = "M";

if (gender == "m" || gender == "M") {
    document.write('<img src="https://img.freepik.com/premium-vector/blue-male-gender-symbol_465506-92.jpg" alt=""></img>');
}

else if (gender == "f" || gender == "F") {
    document.write('<img src="https://static.vecteezy.com/system/resources/previews/000/630/430/non_2x/vector-female-sign-icon-illustration.jpg" alt="">');
}

else {
    document.write("<p style=\"color: red;\">Not Valid</p>");
}

