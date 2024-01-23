let getUsers = (resolve, reject) => {

    let newRequest = new XMLHttpRequest();

    newRequest.addEventListener("readystatechange", () => {
        if (newRequest.readyState === 4 && newRequest.status === 200) {
            const data = JSON.parse(newRequest.responseText);
            resolve(data);
        } else if (newRequest.readyState === 4) {
            reject("Error");
        };
    });

    newRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
    newRequest.send();
};

let practice2 = (arr) => {
    arr.forEach(user => {
        if (user.website.includes(".com")) {
            document.body.innerHTML += user.website + "<br>";
        }
    });
};


getUsers(practice2);
document.body.innerHTML += 1 + "<br>";
document.body.innerHTML += 2 + "<br>";