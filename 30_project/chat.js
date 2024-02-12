class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection("chats");
        this.unsub = false;
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
            await db.collection("chats").add({
                message: message,
                username: this.username,
                room: this.room,
                created_at: firebase.firestore.Timestamp.fromDate(new Date())
            })
        } 
        catch(e) {
            console.error(e);
        }
    }

    async removeChat(message, username, room, createdAt) {
        try {
            let querySnapshot = await db.collection("chats")
                .where("message", "==", message)
                .where("username", "==", username)
                .where("room", "==", room)
                .where("created_at", "==", createdAt)
                .get();

            querySnapshot.forEach(async (doc) => {
                await db.collection("chats").doc(doc.id).delete();
                console.log("Document successfully deleted:", doc.id);
            });

            console.log("All matching documents deleted successfully");
        } catch (error) {
            console.error("Error removing documents:", error);
        }
    }

    getChats(callback) {
        if (this.unsub) {
            this.unsub();
        }
        this.unsub = this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === 'added') {
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
