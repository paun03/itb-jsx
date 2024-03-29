class ChatUi {
    
    constructor(list) {
        this.list = list;
    }

    // SET

    set list(list) {
        this._list = list;
    }

    // GET

    get list() {
        return this._list;
    }

    // METHODS

    formatTime = (timeInSeconds) => {
        let date = new Date(timeInSeconds * 1000);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        
        if (day === currentDate.getDate()) {
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        } else {
            return `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year} - ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`; 
        }
    };
    
    templateLi = (data) => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = "https://www.pngall.com/wp-content/uploads/6/Delete-Button-PNG-High-Quality-Image.png";
        img.width = 20;
        img.setAttribute("id", "imgDelete");
        li.setAttribute("dataId", data.id); 
        li.innerHTML = `${data.username}: ${data.message}<br>${this.formatTime(data.created_at.seconds)}`;
        li.append(img);
        return li;
    };

    delete() {
        this.list.innerHTML = "";
    }

    clear() {
        while (this.list.firstChild) {
            this.list.removeChild(this.list.firstChild);
        }
    }

};

let currentDate = new Date();

export default ChatUi; 