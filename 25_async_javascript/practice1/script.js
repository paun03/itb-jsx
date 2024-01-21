// 1

const requestOne = new XMLHttpRequest();

requestOne.addEventListener("readystatechange", () => {
    if (requestOne.readyState === 4 && requestOne.status === 200) {
    let data = JSON.parse(requestOne.responseText);
    console.log("REQUEST 1");
    console.log(data);
    } else if (requestOne.readyState === 4) {
        console.log("Error.");
    }
});

requestOne.open("GET", "https://jsonplaceholder.typicode.com/users");
requestOne.send();

// 2

const requestTwo = new XMLHttpRequest();

requestTwo.addEventListener("readystatechange", () => {
    if (requestTwo.readyState === 4 && requestTwo.status === 200) {
        let data = JSON.parse(requestTwo.responseText);
        console.log("REQUEST 2");
        for (let i = 0; i < data.length; i++) {
            if (data[i].website.includes(".com") === true) {
                console.log(data[i]);
            }
        }
    } else if (requestTwo.readyState === 4) {
        console.log("Error.");
    }
});

requestTwo.open("GET", "https://jsonplaceholder.typicode.com/users");
requestTwo.send();

// 3

const requestThree = new XMLHttpRequest();

requestThree.addEventListener("readystatechange", () => {
    if (requestThree.readyState === 4 && requestTwo.status === 200) {
        let data = JSON.parse(requestThree.responseText);
        console.log("REQUEST 3");
        for (let i = 0; i < data.length; i++) {
            if (data[i].name.includes("Clementin") === true) {
                console.log(data[i]);
            } else if (requestThree.status !== 200) {
                console.log("Error");
            }
        }
    }
});

requestThree.open("GET", "https://jsonplaceholder.typicode.com/users");
requestThree.send();

// 4

const requestFour = new XMLHttpRequest();

requestFour.addEventListener("readystatechange", () => {
    if (requestFour.readyState === 4 && requestFour.status === 200) {
        let data = JSON.parse(requestFour.responseText);
        console.log("REQUEST 4");
        for (let i = 0; i < data.length; i++) {
            if (data[i].company.name.includes("Group") || data[i].company.name.includes("LLC")) {
                console.log(data[i]);
            }
        }
    } else if (requestFour.readyState === 4) {
        console.log("Error");
    }
});

requestFour.open("GET", "https://jsonplaceholder.typicode.com/users");
requestFour.send();

// 5

const requestFive = fetch("https://jsonplaceholder.typicode.com/users");

requestFive.then((response) => {
    return response.json();
}).then((data) => {
    let cityArr = [];
    for (let i = 0; i < data.length; i++) {
        if (cityArr.includes(data[i].address.city) === false)
        cityArr.push(data[i].address.city);
    };
    console.log("REQUEST 5");
    console.log(cityArr);
}).catch((error) => {
    console.log(error);
});

// 6

const requestSix = fetch("https://jsonplaceholder.typicode.com/users");

requestSix.then((response) => {
    return response.json();
}).then ((data) => {
    let counter = 0;
    data.forEach(element => {
        if (element.address.geo.lat < 0 && element.address.geo.lng < 0) {
            counter++;
        }
    });
    console.log("REQUEST 6");
    console.log(counter);
}).catch((error) => {
    console.log(error);
});