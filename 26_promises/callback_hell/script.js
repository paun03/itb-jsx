let getJSON = (resource, callback) => {
    const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        callback(data, undefined);
    } else if (request.readyState === 4) {
        callback(undefined, "Error!");
    }
});

request.open("GET", resource);
request.send();

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

