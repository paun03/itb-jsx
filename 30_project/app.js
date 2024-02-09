import Chatroom from "./chat.js";
import ChatUi from "./ui.js";

// SELECTORS

let ulMessage = document.querySelector("#ulMessage");

let chatroom1 = new Chatroom("#js", "Petar");
let chatroom2 = new Chatroom("#homeworks", "Stefan");

let chatUiOne = new ChatUi(ulMessage);

chatroom1.getChats(data => {
    chatUiOne.list.append(chatUiOne.templateLi(data));
});