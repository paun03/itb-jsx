const form = document.querySelector("#order");
const capacity = document.querySelector("#capacity");
const div = document.querySelector("#result");

let formTableThree = (event) => {
    event.preventDefault();
    fetch("JSON/stock.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        return fetch("JSON/weights.json");
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        return fetch("JSON/prices.json");
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
};

form.addEventListener("submit", formTableThree);