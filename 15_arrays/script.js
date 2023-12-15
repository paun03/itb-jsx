let cars = [`Volvo`, `BMW`, `Toyota`];
console.log(cars);

let array = [];
array[1] = `Pera`;
array[4] = `Ivana`;
console.log(array[4]);

for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

random = [1, 2, "Hello", null, "Hey", [1, 2, 3]];

let innerArray = random[5];

for (let i = 0; i < innerArray.length; i++) {
    console.log(innerArray[i]);
}

let numbers = [3, 3.5, 8, 90];

for (i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] + (numbers[i] / 10);
}

console.log(numbers);

let isPalindrome = (n) => {
    let newString = "";
    for (let i = n.length; i >= 0; i--) {
        newString += n[i - 1];
    }

    if (newString == n) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("racecar"));