// DOM

// 2

let allLi = document.querySelectorAll("li");

// 3

allLi.forEach(li => {
    li.addEventListener("click", () => {
        // 4 & 5
        // 1. NAČIN
        // li.classList.toggle("precrtaj");
        // 2. NAČIN
        if (li.style.textDecoration === "" || li.style.textDecoration === "none") {
            li.style.textDecoration = "line-through";
        } else if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
        };
    });
});
