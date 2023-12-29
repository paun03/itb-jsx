// 1

let allParagraphs = document.querySelectorAll("p");

for (let i = 0; i < allParagraphs.length; i++) {
    if ((i + 1) % 2 === 0) {
        allParagraphs[i].classList.add("error");
    } else {
        allParagraphs[i].classList.add("success");
    }
};

// 2

for (let i = 0; i < allParagraphs.length; i++) {
    if (i % 3 === 0) {
        allParagraphs[i].style.fontSize = "15px";
    } else if (i % 3 === 1) {
        allParagraphs[i].style.fontSize = "20px";
    } else if (i % 3 === 2) {
        allParagraphs[i].style.fontSize = "25px";
    }
};

// 3

for (let i = 0; i < allParagraphs.length; i++) {
    if (allParagraphs[i].textContent.includes("error")) {
        allParagraphs[i].classList.add("error");
    } else if (allParagraphs[i].textContent.includes("success")) {
        allParagraphs[i].classList.add("success");
    }
};

// 4

for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].classList.toggle("error");
};
 

