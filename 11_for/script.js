// 1
console.log("START OF 1");

for (let i = 1; i <= 20; i++){
    console.log(i);
}

// 2
console.log("START OF 2");

for (i = 20; i >= 1; i--){
    console.log(i);
}

// 3
console.log("START OF 3");

for (i = 2; i <= 20; i+=2) {
    console.log(i);
}

// 4 
console.log("START OF 4");

for (i = 5; i <= 15; i++) {
    console.log(i * 2);
}

// 5
console.log("START OF 5");

let n = 40;
let sum = 0;


for (i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log(sum);

// 6
console.log("START OF 6");

n = 10;
let m = 20;

sum = 0;

for (i = n; i <= m; i++) {
    sum = sum + i;
}

console.log(sum);

// 7 
console.log("START OF 7");

n = 1;
m = 5;

let product = 1;

for (i = n; i <= m; i++) {
    product = product * i;
}

console.log(product);

// 8 
console.log("START OF 8");

n = 1;
m = 10;

sum = 0;

for (i = n; i <= m; i++) {
    sum = sum + (i * i);
}
console.log(sum);

// 9 
for (i = 1; i <= 3; i++) {
    document.write(`<p><img width = "300px" src="${i}.jpg"></p>`);
}

// 10
console.log("START OF 10");

product = 1;

for (i = 20;i <= 100; i++) {
    if (i % 11 == 0) {
        product = product * i;
    } else {}
}

console.log(product);

// 11
console.log("START OF 11");

let amountOfNumbers = 0;

for (i = 5; i <= 150; i++) {
    if (i % 13 == 0) {
        amountOfNumbers++;
    } else {}
}

console.log(amountOfNumbers);

// 12
console.log("START OF 12");

n = 15;
m = 20;

let arithmeticMean = 0;
amountOfNumbers = 0;
sum = 0;

for (i = n; i <= m; i++) {
    amountOfNumbers++;
    sum = sum + i;
}

arithmeticMean = sum / amountOfNumbers;
console.log(arithmeticMean);

// 13
console.log("START OF 13");

let amountOfNumbersPositive = 0;
let amountOfNumbersNegative = 0;

n = -5;
m = 13;

for (i = n; i <= m; i++) {
    if (i == 0) {

    } else if (i < 0) {
        amountOfNumbersNegative++;
    } else {
        amountOfNumbersPositive++;
    }

}

console.log(amountOfNumbersNegative, amountOfNumbersPositive);

// 14
console.log("START OF 14");

amountOfNumbers = 0

for (i = 5; i <= 50; i++) {
    if ((i % 3) || (i % 5)) {
        amountOfNumbers++;
    } else {}
}

console.log(amountOfNumbers);

// 15 
console.log("START OF 15");

n = 10;
m = 101;

sum = 0;
amountOfNumbers = 0;

for (i = n; i <= m; i++) {
    if (i % 10 == 4) {
        sum = sum + i;
        amountOfNumbers++;
    }
}

console.log(sum);
console.log(amountOfNumbers);

// 16
console.log("START OF 16");

n = 20;
m = 40;
let a = 3;

sum = 0;

for (i = n; i <= m; i++) {
    if (i % a != 0) {
        sum = sum + i;
    } else {}
}

console.log(sum);

// 17 
console.log("START OF 17");

n = 3;
m = 6;

product = 1;
a = 3;

for (i = n; i <= m; i++) {
    if (i % a == 0) {
        product = product * i;
    } else {}
}

console.log(product);

// 18
console.log("START 18");

let k = 20;
amountOfNumbers = 0;

for (i = 1; i <= k; i++) {
    if (k % i == 0) {
        amountOfNumbers++;
    }
}

console.log(amountOfNumbers);

// 19
console.log("START 19");

n = 24;
let isItPrime = true;

for (i = 2; i <= n; i++) {
    if (i == n) {
        isItPrime = true;
    } else if (n % i == 0) {
        isItPrime = false;
        break;
    } else if (n == 1) {
        isItPrime = undefined;
    }
}

console.log(isItPrime);

// 20

    n = 6;

    let color = "white";
    let newTable = document.getElementById(`table`);
    let table = '<table>';

    for (let i = 1; i <= n; i++) {
        table += `<tr class = "${color}">
        <td>TEXT${i}</td>
        <td>TEXT${i}</td>
        </tr>`;
        if (i % 2 == 0) {
            color = "white";
        } else if (i % 2 == 1) {
            color = "pink";
        }
    }
    
    table += '</table>';
    newTable.innerHTML = table;

