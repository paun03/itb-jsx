console.log(document);
console.log(document.body);

let e1 = document.getElementById("p2");
console.log(e1);

let el2 = document.getElementsByClassName("par");
console.log(el2);

for (let i = 0; i < el2.length; i++) {
    console.log(el2[i]);
};

let niz = Array.from(el2);

niz.forEach(t => {
    console.log(t);
});

let el3 = document.getElementsByTagName("p");
console.log(el3);

let el4 = document.getElementsByName("p");
console.log(el4);

let t1 = document.querySelector("#p2");
console.log(t1);

let t2 = document.querySelector(".par");
console.log(t2);

let t3 = document.querySelectorAll(".par");
console.log(t3);

t3.forEach(e => {
    console.log(e);
});

let t4 = document.querySelectorAll("div p.par");

let link = document.querySelector("a");
link.innerHTML = `<span "font-weight - bold":>NEW TEXT</span>`;

// link.href = "https://www.google.com";
// console.log(link);

link.setAttribute("href", "https://www.google.com");
console.log(link);

let allLinks = document.querySelectorAll("a");
allLinks.forEach(e => {
    e.style.color = "red";
    e.style.fontSize = "18px";
    e.style.textDecoration = "none";
});



let newDiv = document.createElement("div");
newDiv.innerHTML = "DIV JS";
document.body.appendChild(newDiv);
newDiv.style.backgroundColor = "green";

let newH1 = document.createElement("h1");
newH1.innerHTML = "H1"; 
newDiv.appendChild(newH1);

let uList = document.createElement("ul");
newDiv.append(uList);

let li1 = document.createElement("li");
li1.innerHTML = "Element 1";

let li2 = document.createElement("li");
li2.innerHTML = "Element 2";

let li3 = document.createElement("li"); 
li3.innerHTML = "Element 3";

uList.append(li1, li2, li3);

// uList.removeChild(li1);

uList.removeChild(uList.childNodes[0]);

let li4 = document.createElement("li");
li4.innerHTML = "Element 4"
uList.replaceChild(li4, li3);

let li5 = document.createElement("li");
uList.appendChild(li5);
let image = document.createElement("img");
image.src = "image.jpg";
li5.appendChild(image);