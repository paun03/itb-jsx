let p1 = document.querySelector("p");

let error = document.querySelector("div.error");

let lastRow = document.querySelector("table tr:last-child")

let allLinks = document.querySelectorAll("a");

let allImages = document.querySelectorAll("img");

console.log(p1);
console.log(error);
console.log(lastRow);
console.log(allLinks);
console.log(allImages);


// 1

let allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach(p => {
    p.innerText += "VAŽNO!"
});

// 2

let allErrorDivs = document.querySelectorAll("div.error");

allErrorDivs.forEach(d => {
    d.innerHTML += "<h1>GREŠKA</h1>"
});

// 3

for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].innerText += `${(i + 1)*(i + 1)}`;
}

// 4

allImages.forEach(i => {
    i.alt = "Image";
});

// 5

allParagraphs.forEach(p => {
    p.style.color = "purple";
});

// 6

for (let i = 0; i < allParagraphs.length; i++) {
    if (i % 2 === 0) {
        allParagraphs[i].style.backgroundColor = "green";
    } else {
        allParagraphs[i].style.backgroundColor = "red";
    };
};

// 7

for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].style.padding = "5px";
    allLinks[i].style.fontSize = "18px";
    allLinks[i].style.textDecoration = "none";
    if (i % 2 === 0) {
        allLinks[i].style.backgroundColor = "green";
        allLinks[i].style.color = "purple";
    } else if (i % 2 !== 0) {
        allLinks[i].style.backgroundColor = "blue";
        allLinks[i].style.color = "white";
    };
};

// 8

// for (let i = 0; i < allImages.length; i++) {
//     if (allImages[i].src.endsWith("png")) {
//         allImages[i].style.border = "2px solid red";
//     };
// };

allImages.forEach(i => {
    if (i.src[i.src.length - 1]  === "g" && i.src[i.src.length - 2]  === "n" && i.src[i.src.length - 3]  === "p") {
        i.style.border = "2px red solid"
    } 
});

// 9

for (let i = 0; i < allLinks.length; i++) {
    if (allLinks[i].target = "_blank") {
        a.target = "_top";
    } else {
        a.target = "_blank";
    };
};

console.log(allImages);

