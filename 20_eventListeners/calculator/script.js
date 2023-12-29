// DOM

let num1Value = document.querySelector("#num1");
let num2Value = document.querySelector("#num2");

let btnSubmit = document.querySelector("#submit");
let btnReset = document.querySelector("#reset");

let pResult = document.querySelector("#pResult")

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let num1 = Number(num1Value.value);
    let num2 = Number(num2Value.value);
    let result = 0;
    let operation = document.querySelector(`input[name = "operation"]:checked`);
    let o = "";
    if (operation.value === "plus") {
        result = num1 + num2;
        o = "+";
    } else if (operation.value === "minus") {
        result = num1 - num2;
        o = "-";
    } else if (operation.value === "multiply") {
        result = num1 - num2;
        o = "*";
    } else if (operation.value === "divide") {
        if (num2 === 0) {
            alert("Error");
        }
        result = num1 - num2;
        o = "/";
    }
    pResult.innerHTML = `${num1} ${o} ${num2} = ${result}`;
});