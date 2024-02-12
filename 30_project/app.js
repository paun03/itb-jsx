import Chatroom from "./chat.js";
import ChatUi from "./ui.js";

// SELECTORS

let sectionSelectARoom = document.querySelector("#sectionSelectARoom");
let sectionUsernameChange = document.querySelector("#sectionUsernameChange");

let ulMessage = document.querySelector("#ulMessage");

let btnSend = document.querySelector("#btnSend");
let btnUpdate = document.querySelector("#btnUpdate");
let btnColor = document.querySelector("#btnColor");

let inputSend = document.querySelector("#inputSend");
let inputUpdate = document.querySelector("#inputUpdate");
let inputColor = document.querySelector("#inputColor");

let h1WelcomeMessage = document.querySelector("#h1WelcomeMessage");
let spanCounter = document.querySelector("#spanCounter");

let newRoom = "#general";
let spanCounterVar = 3;

// OBJ

let chatroom = new Chatroom(newRoom, "Anon");
let chatUiOne = new ChatUi(ulMessage);

// FUNCTION

let selectedRoom = (e) => {
    if (e.target.textContent == "#general") {
        btnGeneral.classList.add("btnBackgroundColor");
        btnJs.classList.remove("btnBackgroundColor");
        btnHomeworks.classList.remove("btnBackgroundColor");
        btnTests.classList.remove("btnBackgroundColor");
    } else if (e.target.textContent == "#js") {
        btnGeneral.classList.remove("btnBackgroundColor");
        btnJs.classList.add("btnBackgroundColor");
        btnHomeworks.classList.remove("btnBackgroundColor");
        btnTests.classList.remove("btnBackgroundColor");
    } else if (e.target.textContent == "#homeworks") {
        btnGeneral.classList.remove("btnBackgroundColor");
        btnJs.classList.remove("btnBackgroundColor");
        btnHomeworks.classList.add("btnBackgroundColor");
        btnTests.classList.remove("btnBackgroundColor");
    } else if (e.target.textContent == "#tests") {
        btnGeneral.classList.remove("btnBackgroundColor");
        btnJs.classList.remove("btnBackgroundColor");
        btnHomeworks.classList.remove("btnBackgroundColor");
        btnTests.classList.add("btnBackgroundColor");
    }
};

// EVENT LISTENERS

btnUpdate.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.setItem("username", inputUpdate.value);
    chatroom.username = localStorage.getItem("username");
    h1WelcomeMessage.innerHTML = `Welcome, ${localStorage.getItem("username")}`;
    sectionUsernameChange.style.display = "block";
    setTimeout(() => {
        sectionUsernameChange.style.display = "none";
        location.reload();
    }, 3000);

    setInterval(() => {
        spanCounterVar--;
        spanCounter.innerHTML = spanCounterVar;
        if (spanCounterVar === 0) {
            spanCounterVar = 3;
        }
    }, 1000);  
});

chatroom.username = localStorage.getItem("username");

btnSend.addEventListener("click", (event) => {
    event.preventDefault();
    if (inputSend.value.trim() !== "") {
    chatroom.addChat(inputSend.value);
    inputSend.value = "";
    }
});

btnColor.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("color", inputColor.value);
    document.body.style.backgroundColor = localStorage.getItem("color");
});

document.body.style.backgroundColor = localStorage.getItem("color");

sectionSelectARoom.addEventListener('click', e => {  
    if (e.target.tagName == "BUTTON") {
        selectedRoom(e);  
        newRoom = e.target.textContent;
        chatroom.updateRoom(newRoom);
        chatUiOne.clear(); 
        chatroom.getChats(data => {
            if (data.room === chatroom.room) {
                const listItem = chatUiOne.templateLi(data);
                if (data.username === chatroom.username) {
                    listItem.style.backgroundColor = "beige";
                    listItem.style.marginLeft = "100%";
                }
                chatUiOne.list.appendChild(listItem);
            }
        });
    }
});

sectionMessageDisplay.addEventListener("click", async (e) => {
    e.preventDefault();
    if (e.target.id === "imgDelete") {
        if (e.target.closest('li').style.backgroundColor !== "beige") {
            e.target.closest('li').remove();
        } else {
            let dataId = e.target.closest('li').getAttribute('dataId');
            console.log(dataId);
            e.target.closest('li').remove();
            await chatroom.removeChat(dataId); 
        }
    }
});

window.onload = () => {
    btnGeneral.classList.add("btnBackgroundColor");
    chatroom.updateRoom(newRoom);
    chatUiOne.clear();
    chatroom.getChats(data => {
        if (data.room === chatroom.room) {
            const listItem = chatUiOne.templateLi(data);
            if (data.username === chatroom.username) {
                listItem.style.backgroundColor = "beige";
                listItem.style.marginLeft = "100%";
            }
            chatUiOne.list.appendChild(listItem);
        }
    })
};