// 1

let array = ["H", "E", "L", "L", "O"];

// 2

console.log(`START OF 2`);

let numbers = [10, 2, -3, 9, 5];
let numbers2 = [5, 6, 22, 12, 2];
let numbers3 = [0, 15, -2];

let sumOfArray = (array) => {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
console.log(sumOfArray(numbers));

// 3

console.log(`START OF 3`);

let productOfArray = (array) => {
    let product = 1;
    for (i = 0; i < array.length; i++) {
        product = product * array[i];
    }
    return product;
}

console.log(productOfArray(numbers));

// 4

console.log(`START OF 4`);

let aMean = (array) => {
    let aMean = 0;
    let sum = 0;
    let amount = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
        amount++;
    }
    aMean = sum / amount;
    return aMean;
} 


console.log(aMean(numbers));
console.log(aMean(numbers2));


// 4a

console.log(`START OF 4a`);

let aMean2 = (array) => {
    let aMean = 0;
    let sum = 0;
    let amount = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
        sum = sum + array[i];
        amount++;
        }
    }
    aMean = sum / amount;
    return aMean;
}

console.log(aMean2(numbers));
console.log(aMean2(numbers2));
console.log(aMean2(numbers3));

// 5

console.log(`START OF 5`);

let maxValue = (array) => {
    let max = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(maxValue(numbers));
console.log(maxValue(numbers2));
console.log(maxValue(numbers3));

// 6

console.log(`START OF 6`);

let minValue = (array) => {
    let min = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

console.log(minValue(numbers));
console.log(minValue(numbers2));
console.log(minValue(numbers3));

// 7

console.log(`START OF 7`);

let indexOfMax = (array) => {
    let max = array[0];
    let index = 0;
    for (i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            index = i;
        }
    }
    return index;
}

console.log(indexOfMax(numbers));
console.log(indexOfMax(numbers2));
console.log(indexOfMax(numbers3));

// 8

console.log(`START OF 8`);

let indexOfMin = (array) => {
    let min = array[0];
    let index = 0;
    for (i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            index = i;
        }
    }
    return index;
}

console.log(indexOfMin(numbers));
console.log(indexOfMin(numbers2));
console.log(indexOfMin(numbers3));

// 9

console.log(`START OF 9`);

let amountOfE = (array) => {
    let amount = 0;
    let amountOfLarger = 0;
    let sum = 0;
    let arMean = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
        amount++;
    }
    arMean = sum / amount;

    for (i = 0; i < array.length; i++) {
        if (array[i] > arMean) {
            amountOfLarger++;
        }
    }
    return amountOfLarger;
}

console.log(amountOfE(numbers));
console.log(amountOfE(numbers2));
console.log(amountOfE(numbers3));

// 10

console.log(`START OF 10`);

let sumOfPositive = (array) => {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i]
        }
    }
    return sum;
}

console.log(sumOfPositive(numbers));
console.log(sumOfPositive(numbers2));
console.log(sumOfPositive(numbers3));

// 11 

console.log(`START OF 11`);

let amountOfEven = (array) => {
    let amount = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            amount++;
        }
    }
    return amount;
}

console.log(amountOfEven(numbers));
console.log(amountOfEven(numbers2));
console.log(amountOfEven(numbers3));

// 12

console.log(`START OF 12`);

let amountOfEvenWithOddIndex = (array) => {
    let amount = 0;
    for (i = 0; i < array.length; i++) {
        if ((array[i] % 2 == 0) && (i % 2 == 1)) {
            amount++;
        }
    }
    return amount;
}

console.log(amountOfEvenWithOddIndex(numbers));
console.log(amountOfEvenWithOddIndex(numbers2));
console.log(amountOfEvenWithOddIndex(numbers3));

// 13

console.log(`START OF 13`);

let sumOfEven = (array) => {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            sum = sum + array[i];
        }
    }
    return sum;
}

console.log(sumOfEven(numbers));
console.log(sumOfEven(numbers2));
console.log(sumOfEven(numbers3));

// 14

console.log(`START OF 14`);

let change = (array) => {
    for (i = 0; i < array.length; i++) {
        array[i] = array[i] * (-1); 
    }
    return array;
}

console.log(change(numbers));
console.log(change(numbers2));
console.log(change(numbers3));

// 15

console.log(`START OF 15`);

let changeOddWithEvenIndex = (array) => {
    for (i = 0; i < array.length; i++) {
        if ((array[i] % 2 != 0) && (i % 2 == 0)) {
            array[i] = array[i] * (-1); 
        }
    }
    return array;
}

console.log(changeOddWithEvenIndex(numbers));
console.log(changeOddWithEvenIndex(numbers2));
console.log(changeOddWithEvenIndex(numbers3));