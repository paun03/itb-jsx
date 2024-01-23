let myFunction = (callback) => {
    callback();
};

myFunction(() => {
    console.log("Callback");
});

let sum = (func) => {
    func(4, 5);
};

sum((a, b) => {
    console.log(a + b);
});

let printSum = (x, y) => {
    console.log(x + y);
}

sum(printSum);

let diff = (func) => {
    let difference = func(100, 30);
    console.log(difference);
};

let subtract = (a, b) => {
    return a - b;
};

diff(subtract);