const form = document.querySelector("#order");
const capacity = document.querySelector("#capacity");
const div = document.querySelector("#result");

/*

1) Odrediti artikle koji više nisu na stanju.
2) Odrediti ukupnu masu svih tih artikala.
3) Ako je masa manja od kapactieta kamiona, onda:
    3.1) Odrediti i ispisati ukupnu cenu svih tih artikala.
    3.2) Inače, ispisati poruku da kamion nema traženi kapacitet.

*/

let getItems = (resource, resolve, reject) => {
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
};

let submitFormOne = (event) => {
    event.preventDefault();
    let arrItems = [];
    getItems("JSON/stock.json", (data) => {
        data.forEach(item => {
            if(item.stock === 0) {
                arrItems.push(item.id);
            }
        });
        getItems("JSON/weights.json", (data) => {
            let totalWeight = 0;
            data.forEach(item => {
                if (arrItems.includes(item.id)) {
                    totalWeight += item.weight;
                }
            });
            if (totalWeight <= Number(capacity.value)) {
                console.log(totalWeight);
                div.innerHTML = "";
                getItems("JSON/prices.json", (data) => {
                    let totalPrice = 0;
                    data.forEach((item) => {
                        if (arrItems.includes(item.id)) {
                            totalPrice += item.price;
                        }
                    });
                    div.innerHTML = totalPrice;
                }, (msg) => {
                    div.innerHTML = msg;
                }); 
            } else {
                div.innerHTML = "Not Enough Capacity!";
            }
        }, (msg) => {
            div.innerHTML = msg;
        });
        console.log(arrItems);
    }, (msg) => {
        div.innerHTML = msg;
    }); 
};


// form.addEventListener("submit", submitFormOne => {
//     e.preventDefault();
//     div.innerHTML = "Submitted";
// });

form.addEventListener("submit", submitFormOne);