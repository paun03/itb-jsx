// 1

console.log(`START OF 1`);

let maks2 = (x, y) => {
    if (x >= y ) {
        return x;
    } else {
        return y;
    } 
}

console.log(maks2(2, 4));

let maks4 = (a, b, c, d) => {
    return maks2((a, b), (c, d));
}

console.log(maks4(1, 6, 3, 4));

// 2

let divTag = document.getElementById('div1');

let vracaSliku = (path) => {
    return (`<span><img src='${path}'></span>`);
}

// let photo = vracaSliku("https://media.macphun.com/img/uploads/macphun/blog/2063/_1.jpeg?q=75&w=1710&h=906&resize=cover");
divTag.innerHTML += vracaSliku("https://media.macphun.com/img/uploads/macphun/blog/2063/_1.jpeg?q=75&w=1710&h=906&resize=cover");