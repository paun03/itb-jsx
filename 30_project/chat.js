class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection("chats");
    }
    
    // SET

    set room(room) {
        this._room = room;
    }

    set username(username) {
        if ((username.length < 2 || username.length > 10) || (username.trim().length === 0)) {
            alert("Invalid Username");
        }
        this._username = username;
    }

    // GET

    get room() {
        return this._room;
    }

    get username() {
        return this._username;
    }

    // METHODS

    async addChat(message) {
        try {
            return await db.collection("chats").add({
                message: message,
                username: this.username,
                room: this.room,
                created_at: firebase.firestore.Timestamp.fromDate(new Date())
            })
        } 
        catch(e) {
            console.log(e);
        }
    }

    getChats(callback) {
        this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added') {
                    callback(change.doc.data());
                }
            });
        });
    }

    updateRoom(room) {
        this.room = room;
    }
};


export default Chatroom;
