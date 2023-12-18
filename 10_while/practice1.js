// 1b

let x = 1; 

while (x <= 20) {
    console.log(x++);
}

console.log("End 1b");

// 1a

x = 1;

let y = "";

while (x <= 20) {
    y = y + ((x++) + " ");
}

console.log(y + "End 1a");

// 2

x = 20; 

while (x >= 1) {    
    console.log(x--);
}

console.log("End 2");


// 2.1 

x = 1;

while (x >= 20) {
    console.log(21 - x);
    x++;
}

console.log("End 2.1");

// 3

x = 0;

while (x < 20) 
{
    x = x + 2;
    console.log(x);
}

console.log("End 3");

// 3.1 

x = 1;

while (x <= 20) {
    if (x % 2 == 0) 
    {
        console.log(x);
    }
    x++;
}

console.log("End 3.1")

// 4

let n = 12;
let i = 1;

while (i <= n) {
    if (i % 3 == 1) {
        document.write(`<p style="color: red">Lorem</p>`);
    } else if (i % 3 == 2) {
        document.write(`<p style="color: blue">Lorem</p>`);
    } else { 
        document.write(`<p style="color: purple">Lorem</p>`);
    }

    i++;
}

// 5

n = 6;
i = 1;

while (i <= n) {
    if (i % 2 == 1) {
        document.write(`<p><img style="border: double 10px blue" src="https://media.npr.org/assets/img/2015/09/23/ap_836720500193-13f1674f764e5180cf9f3349cfef258d181f2b32-s1100-c50.jpg" alt=""></p>`);
    } else {
        document.write(`<p><img style="border: double 10px red" src="https://media.npr.org/assets/img/2015/09/23/ap_836720500193-13f1674f764e5180cf9f3349cfef258d181f2b32-s1100-c50.jpg" alt=""></p>`);
    }

    i++;
}

// 6

x = 0;
// n = 100;
let sum = 0;

while (x < 100) {
    x++;
    sum = sum + x;
}

console.log(sum);
console.log("END 6");


// 7

x = 0;
n = 20;
sum = 0;

while (x < n) {
    x++;
    sum = sum + x;
}

console.log(sum);
console.log("END 7");

// 8

n = 15;
let m = 20;

sum = 0;

while (n <= m) {
    sum = sum + n;
    n++;
}

console.log(sum);
console.log("END 8");

// 9 

n = 1;
m = 5;

let product = 1;

while (n <= m) {
    product = product * n;
    n++;
}

console.log(product);
console.log("END 9");

// 10

n = 1;
m = 4;

let sum_even = 0;
let sum_odd = 0;

while (n <= m) {
    if (n % 2 == 0) {
        sum_even = sum_even + (n * n);
    } else if (n % 2 == 1) {
        sum_odd = sum_odd + (n * n * n);
    }
    n++;
}

console.log(sum_even, sum_odd);
console.log("END 10");

// 11

let k = 18;
i = 1;

let brojDelioca = 0;

while (i < k) {
    if (k % i == 0) {
        brojDelioca++;
        i++;
    } else if (k % i != 0) {
        i++;
    }
}

console.log(brojDelioca);
console.log("END 11");


// 12

n = 7;
i = 2;


if (n == 2) {
    console.log("PROST");
} else {
    while (i < n) {
        if(n % i == 0) {
            console.log("NIJE PROST");
            break;
        } else {
            i++;
            if (i == n) {
            console.log("PROST");
            }
        }
    }
}

console.log("END 12");

// 13

n = 123;
i = 0;

let digit = 0;

let sumOfDigits = 0;
let arithmeticMean = 0;
let amountOfDigits = 0;
let stringNumber = "";

while (n > i) {
    digit = n % 10;
    amountOfDigits++;
    sumOfDigits = sumOfDigits + digit;
    n = Math.floor(n / 10);
    stringNumber = stringNumber + digit;
}

arithmeticMean = sumOfDigits / amountOfDigits;

console.log(sumOfDigits);
console.log(arithmeticMean);
console.log(stringNumber);
console.log("END OF 13");