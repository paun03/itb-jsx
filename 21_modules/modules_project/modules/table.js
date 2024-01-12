import generateImage from "./general.js";

let generateTable = (parent) => {
    let table = document.createElement("table");
    table.style.border = "2px solid black";
    parent.appendChild(table);
    return table;
};

let generateTableRow = (parent) => {
    let trTag = document.createElement("tr");
    parent.appendChild(trTag);
    return trTag;
};

let generateItem = (parent, src) => {
    let tdTag = document.createElement("td");
    let image = generateImage(src);
    tdTag.appendChild(image);
    parent.appendChild(tdTag);
    return tdTag;
};

export {generateTable, generateTableRow, generateItem};