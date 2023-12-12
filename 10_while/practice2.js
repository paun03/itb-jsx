// 1
console.log("START 1");

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 1.1
console.log("START 1.1");

let stringNumber = "";

for (i = 1; i <= 20; i++) {
    stringNumber = stringNumber + i + " ";
}

console.log(stringNumber);


// 2
console.log("START 2");

for (i = 20; i >= 1; i--) {
    console.log(i);
}

// 3
console.log("START 3");

for (i = 2; i <=20; i = i + 2) {
    console.log(i);
}

// 4
console.log("START 4");

let n = 7;

for (i = 1; i <= n; i++) {
    if (i % 3 == 1) {
        document.write(`<p style="color: red">Lorem</p>`);
    } else if (i % 3 == 2) {
        document.write(`<p style="color: green">Lorem</p>`);
    } else if (i % 3 == 0) {
        document.write(`<p style="color: blue">Lorem</p>`);
    }
 }

 // 5
 console.log("START 5");

n = 7;

for (i = 1; i < n; i++) {
    if(i % 2 == 0) {
        document.write(`<p><img style="border: 10px double purple" src="https://media.npr.org/assets/img/2015/09/23/ap_836720500193-13f1674f764e5180cf9f3349cfef258d181f2b32-s1100-c50.jpg" alt="">
        </p>`);
    } else {
        document.write(`<p><img style="border: 10px double orange" src="https://media.npr.org/assets/img/2015/09/23/ap_836720500193-13f1674f764e5180cf9f3349cfef258d181f2b32-s1100-c50.jpg" alt=""></p>`);
    }
}

// 6
console.log("START 6");

let sum = 0;

for (i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);

// 7
console.log("START 7");

sum = 0;
n = 69;

for (i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log(sum);

// 8
console.log("START 8");

let m = 15;
n = 20;

sum = 0;

for (i = m; i <= n; i++) {
    sum = sum + i;
}

console.log(sum);

// 9
console.log("START 9");

m = 1;
n = 5;

let product = 1;

for (i = m; i <= n; i++) {
    product = product * i;
}

console.log(product);

// 10
console.log("START 10");

m = 20;
n = 24;

let sum_even = 0;
let sum_odd = 0;

for (i = m; i <=n; i++) {
    if (i % 2 == 0) {
        sum_even = sum_even + (i * i);
    } else {
        sum_odd = sum_odd + (i * i * i);
    }
}

console.log(sum_even, sum_odd);

// 11
console.log("START 11");

let k = 12;
let amountOfNumbers = 0;

for (i = 1; i < k; i++) {
    if (k % i == 0) {
        amountOfNumbers++;
    } 
}

console.log(amountOfNumbers);

// 12
console.log("START 12");

n = 2;
let isItAPrime = true;

for (i = 2; i < n; i++) {
    if (i === 2) {
       isItAPrime = true; 
    } else if (n % i === 0) {
        isItAPrime = false;
    } else if (n === i) {
        isItAPrime = true;
    }
}

if (isItAPrime == true) {
    console.log("PRIME")
} else {
    console.log("NOT A PRIME")
}