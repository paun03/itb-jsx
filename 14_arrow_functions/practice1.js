// 3

// 1 reguralne funkcije

function neparan(n) {
    let x; // važi u bloku u kom je definisan
    if (n % 2 == 1) {
        x = true;
    } else {
        x = false;
    } 
    return x;
} 


function neparan2(n) {
    if (n % 2 == 1) {
        var x = true; // var je dostupna unutar funkcije u kojoj je deklarisana
    } else {
        var x = false;
    }
    return x;
}


console.log(neparan(3));

let neparan3 = (n) => {
    let x = false;
    if (n % 2 == 1) {
        x = true;
    }
    return x; 
}

let neparan4 = (n) => {
    if (n % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

let neparan5 = (n) => {
    return (n % 2 == 1) ? true : false; // ternarni operator
}

console.log(neparan5(2));

let radniDan = () => {
    let dan = new Date();
    let day = dan.getDay();
    if (day == 0 || day == 6) {
        return ("Vikend");
    } else {
        return ("Radni Dan");
    }
}

// document.body.innerHTML += radniDan();
// alert(radniDan());

let neparan6 = (n) => {
    return (n % 2 == 1);

}

console.log(neparan6(6));

let neparan7 = (n) => (n % 2 == 1);
console.log(neparan7(6));

