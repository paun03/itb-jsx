// S

let inputText = document.querySelector("#inputText");
let inputNum1 = document.querySelector("#inputNum1");
let inputNum2 = document.querySelector("#inputNum2");
let inputSubmit = document.querySelector("#inputSubmit");
let divPlacement = document.querySelector("#divPlacement");
let form = document.querySelector("form");

// F



let submitForm = (event) => {
    event.preventDefault();
    let arrItems = [];
    let arrItemsConsistWord = [];
    let itemsBetweenPrices = [];
    fetch("JSON/stock.json")
    .then((resource) => {
        return resource.json();
    })
    .then((data) => {
        data.forEach((item) => {
            if (item.stock > 0) {
                arrItems.push(item);
            };
        });
        arrItems.forEach((item) => {
            if (item.item.includes(inputText.value)) {
                arrItemsConsistWord.push(item);
            }
        });
        return fetch("JSON/prices.json");
    })
    .then((resource) => {
        return resource.json();
    })
    .then((data) => {
        data.forEach((item) => {
            for (let i = 0; i < arrItemsConsistWord.length; i++) {
                if (item.price > inputNum1.value && inputNum2.value > item.price && item.item === arrItemsConsistWord[i].item) {
                    itemsBetweenPrices.push(item);
                }
            }
        })
    })
    .catch((error) => {
        console.error(error);
    });

    console.log("#1");
    console.log(arrItems);
    console.log("#2");
    console.log(arrItemsConsistWord);
    console.log("#3");
    console.log(itemsBetweenPrices);

    let table = document.createElement("table");

    for (let i = 0; i < itemsBetweenPrices.length; i++) {
        let item = itemsBetweenPrices[i];

        let tableRow = document.createElement("tr");

        let tableDataName = document.createElement("td");
        tableDataName.textContent = item.item;

        let tableDataPrice = document.createElement("td");
        tableDataPrice.textContent = item.price;

        tableRow.append(tableDataName, tableDataPrice);
        table.append(tableRow);
    }

    divPlacement.append(table);
};

form.addEventListener("submit", submitForm);