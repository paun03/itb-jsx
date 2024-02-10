import Chatroom from "./chat.js";
import ChatUi from "./ui.js";

// SELECTORS

let sectionSelectARoom = document.querySelector("#sectionSelectARoom");

let ulMessage = document.querySelector("#ulMessage");

let btnSend = document.querySelector("#btnSend");
let btnUpdate = document.querySelector("#btnUpdate");

let inputSend = document.querySelector("#inputSend");
let inputUpdate = document.querySelector("#inputUpdate");

let newRoom = "";

// OBJ

let chatroom = new Chatroom(newRoom, "Anon");
let chatUiOne = new ChatUi(ulMessage);

// EVENT LISTENERS

btnUpdate.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.setItem("username", inputUpdate.value);
    chatroom.username = localStorage.getItem("username");
});

chatroom.username = localStorage.getItem("username");

btnSend.addEventListener("click", (event) => {
    event.preventDefault();
    if (inputSend.value.trim() !== "") {
        chatroom.addChat(inputSend.value);
    }
});

sectionSelectARoom.addEventListener('click', e => {
    if (e.target.tagName == "BUTTON") {
        newRoom = e.target.textContent;
        chatroom.updateRoom(newRoom);
        chatUiOne.clear(); 
        chatroom.getChats(data => {
            if (data.room === chatroom.room) { 
                chatUiOne.list.appendChild(chatUiOne.templateLi(data));
            }
        });
    }
});

chatroom.getChats(data => {
    if (data.room === chatroom.room) { 
        chatUiOne.list.appendChild(chatUiOne.templateLi(data));
    }
});