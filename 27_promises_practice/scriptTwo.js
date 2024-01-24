const form = document.querySelector("#order");
const capacity = document.querySelector("#capacity");
const div = document.querySelector("#result");

let getItemsReturnPromise = (resource) => {
    return new Promise ((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            resolve(data);        
        } else if (request.readyState === 4) {
            reject("Error!");
        }
    });
    request.open("GET", resource);
    request.send();
    });
};

let submitFormTwo = (event) => {
    event.preventDefault();
    let arrOfArticles = [];
    getItemsReturnPromise("JSON/stock.json")
    .then((data) => {
        data.forEach(item => {
            if (item.stock === 0) {
                arrOfArticles.push(item.id);
            };
        });
        return getItemsReturnPromise("JSON/weights.json");
    })
    .then((data) => {
        let totalWeight = 0;
        data.forEach((item) => {
            if (arrOfArticles.includes(item.id)) {
                totalWeight += item.weight;
            }
        });
        if (totalWeight >= Number(capacity.value)) {
            div.innerHTML = "Not Enough Capacity!";
        } else {
        return getItemsReturnPromise("JSON/prices.json");
        }
    })
    .then((data) => {
        let totalPrice = 0;
        if (data !== undefined) {
            data.forEach((item) => {
                if (arrOfArticles.includes(item.id)) {
                    totalPrice += item.price;                    
                }
            });
            div.innerHTML = `Total Price: ${totalPrice}`;
        };
        let table = document.createElement("table");
        data.forEach((item) => {
            if (arrOfArticles.includes(item.id)) {
                let tableRow = document.createElement("tr");
                let tableDataId = document.createElement("td");
                let tableDataPrice = document.createElement("td");
                tableDataId.innerHTML = item.id;
                tableDataPrice.innerHTML = item.price + "0";
                tableRow.append(tableDataId, tableDataPrice);
                table.append(tableRow);
            };
        });
        div.append(table);
    })
    .catch((msg) => {
        div.innerHTML = msg;
    });
};

form.addEventListener("submit", submitFormTwo);