import generateImage from "./general.js"

let generateList = (parent) => {
    let uList = document.createElement("ul");
    parent.appendChild(uList);
    return uList;
};

let generateItem = (parent, src) => {
    let listItem = document.createElement("li");
    let image = generateImage(src);
    listItem.appendChild(image);
    parent.appendChild(listItem);
    return listItem;
};

export {generateList, generateItem};