let getJSON = (resource) => {
    const request = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    let data = JSON.parse(request.responseText);
                    resolve(data);
                } else {
                    reject(new Error("Failed to fetch data"));
                }
            }
        });

        request.open("GET", resource);
        request.send();
    });
};

getJSON("../JSON/prvi.json", (param) => {
    console.log(param); 
});

getJSON("../JSON/drugi.json", (param) => {
    console.log(param); 
});

getJSON("../JSON/treci.json", (param) => {
    console.log(param); 
});

getJSON("../JSON/prvi.json")
.then(data => {
    console.log(data);
    return getJSON("../JSON/drugi.json");
})
.then(data => {
    console.log(data);
    return getJSON("../JSON/treci.json");
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
});