// 1

console.log('START OF 1');

let a = [1, 2, 3, 4, 5];

a.forEach(function(e) {
    console.log(e);
})

console.log("START OF 1.1");

a.forEach(e => {
    console.log(e);
})

// 2

console.log("START OF 2");

let sumOfElements = a => {
    let sum = 0;
    a.forEach(e => {
        sum += e;
    });
    return sum;
}

console.log(sumOfElements(a));


// 3

console.log("START OF 3");

let productOfElements = a => {
    let product = 1;
    a.forEach(e => {
        product *= e;
    });
    return product;
}

console.log(productOfElements(a));

// 4

console.log("START OF 4");

let arithmeticMean = a =>{
    let count = 0;
    let sum = 0;
    a.forEach(e => {
        sum += e;
        count++;
    });
    return sum / count;
}

console.log(arithmeticMean(a));

// 5

console.log("START OF 5");

let maxValue = a => {
    let max = a[0];
    a.forEach(e => {
        if (e > max) {
            max = e;
        }
    })
    return max;
}

console.log(maxValue(a));


// 6

console.log("START OF 6");

let minValue = a => {
    let min = a[0];
    a.forEach(e => {
        if (e < min) {
            min = e;
        }
    });
    return min;
}

console.log(minValue(a));

// 7

console.log("START OF 7");

let indexOfMax = a => {
    let max = a[0];
    let maxIndex = 0;
    a.forEach((e, i)  => {
        if (e > max) {
            maxIndex = i;
        }
    });
    return maxIndex;
}

console.log(indexOfMax(a));

// 8

console.log("START OF 8");

let indexOfMin = a => {
    let min = a[0];
    let minIndex = 0;
    a.forEach((e, i) => {
        if (e < min) {
            minIndex = i;
        }
    });
    return minIndex;
}

console.log(indexOfMin(a));

// 9

console.log("START OF 9");

let biggerThanArMean = a => {
    let avg = 0;
    let sum = 0;
    let count = 0;
    a.forEach(e => {
        sum += e;
    });
    avg = sum / a.length;
    a.forEach(e => {
        if (e > avg) {
            count++;
        }
    });
    return count;
}

console.log(biggerThanArMean(a));

// 19

console.log("START OF 19");

const strings = ["Lalalal", "Lululu", "Lelel", "Lililili"]

let lengthOfEveryElement = a => {
    a.forEach(e => {
        console.log((e.length));
    })
}

lengthOfEveryElement(strings);

// 20

console.log("START OF 20");

let longestElement = (arr) => {
    let longest = arr[0];
    arr.forEach(e => {
        if (e.length > longest.length) {
            longest = e;
        }
    });
    return longest;
}

console.log(longestElement(strings));

// 24

let mergeTwoArrays = (a, b) => {
    let c = [];
    a.forEach((e, i ) => {
        // c.push(a[i], b[i]);
        c.push(e, b[i]);
    });
    return c;
}

let n1 = [1, 2, 3, 4];
let n2 = [5, 6, 7, 8];

// 25

let productOfIndexes = (a, b) => {
    let c = [];
    a.forEach((e, i) => {
        c.push (e * b[i]);
    })
    return c;
}

console.log(productOfIndexes(n1, n2));

// 26

let createNewArray = (a) => {
    let k = a.length;
    let n = k / 2;
    let b = [];
    for (let i = 0; i < n; i++) {
        b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
    }
    return b;
}

console.log((createNewArray(n1)));

let createNewArrayForEach = a => {
    let b = [];
    let n = a.length / 2;
    a.forEach((e, i) => {
        if (i < a.length / 2) {
            b[i] = (e + a[2 * n - 1 - i]) / 2;
        } 
    });
    return b;
}

console.log(createNewArrayForEach(n2));