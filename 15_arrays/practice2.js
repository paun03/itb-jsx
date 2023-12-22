// 19

console.log(`START OF 19`);

let strings = ["Mango", "Banana", "Papaya", "Avocado"];
let strings2 =["Apple", "Cherry", "Plum", "Orange"];

let nums1 = [1, 2, 3, 4];
let nums2 = [12, 25, 60];

let lengthOfEveryElement = (a) => {
    let newStrings = "";
    for (let i = 0; i < a.length; i++) {
        newStrings += a[i].length + " ";
    }
    return newStrings;
}

console.log(lengthOfEveryElement(strings));

// 20

console.log(`START OF 20`);

let longestElement = (a) => {
    let max = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i].length > max.length) {
            max = a[i];
        }
    }
    return max;
}

console.log(longestElement(strings));

// 21

console.log(`START OF 21`);

let amountLarger = (a) => {
    let totalLength = 0;
    let count = 0;
    let avg = 0;
    for (let i = 0; i < a.length; i++) {
        totalLength += a[i].length;
    }
    avg = totalLength / a.length; 
    for (let i = 0; i < a.length; i++) {
        if (a[i].length > avg) {
            count++;
        }
    }
    return count;
}

console.log(amountLarger(strings));

// 22

console.log(`START OF 22`);

let doesItContainA = (a) => {
    let c = 0;
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < a[i].length; j++) {
            if(a[i][j] == "a" || a[i][j] == "A") {
                c++;
                break;
            }
        }
    }
    return c;
}

console.log(doesItContainA(strings));

// 23

console.log(`START OF 23`);

let doesItStartWithA = (a) => {
    let c = 0;
    for (i = 0; i < a.length; i++) {
        if(a[i][0] == "a" || a[i][0] == "A") {
            c++;
        }
    }
    return c;
}

console.log(doesItStartWithA(strings));

// 24

console.log(`START OF 24`);

let createNewArray = (a, b) => {
    let c = [];
    for (i = 0; i < a.length; i++) {
        c += [a[i]] + " " + [b[i]] + " "; 
    }
    return c;
}

console.log(createNewArray(strings, strings2));

// 24.1

console.log(`START OF 24.1`);

let createNewArray2 = (a, b) => {
    let c = [];
    for (i = 0; i < a.length; i++) {
        c.push(a[i], b[i]);
    }
    return c;
}

console.log(createNewArray2(strings, strings2));

// 25

console.log(`START OF 25`);

let createNewArray3 = (a, b) => {
    let len = a.length;
    let c = [];
    for (i = 0; i < len; i++) {
        c.push((a[i]) * (b[i]));
    }
    return c;
}

console.log(createNewArray3(nums1, nums2));

// 26

console.log(`START OF 26`);

let createNewArray4 = (a) => {
    let b = [];
    let n = a.length; 

    for (let i = 0; i < n; i++) { 
        b.push((a[i] + a[2 * n - 1 - i]) / 2); 
    }

    return b;
}

console.log(createNewArray4(nums1));