// 1

db.collection("movies").doc("movie1").set({
    name: "Killers Of The Flower Moon",
    director: {
        name: "Murtin",
        surname: "Scorsese",
    },
    release_year: 2023,
    genres: ["mystery", "drama"],
    rating: 8.9
}).then(() => {
    console.log("Successful");
}).catch((error) => {
    console.log(error);
});

db.collection("movies").doc("movie2").set({
    name: "Inception",
    director: {
        name: "Christopher",
        surname: "Nolan",
    },
    release_year: 2010,
    genres: ["science fiction", "action", "thriller"],
    rating: 8.8
}).then(() => {
    console.log("Successful");
}).catch((error) => {
    console.log(error);
});

// 2

db.collection("movies").doc("movie1").update({
    rating: 7.7
}).then(() => {
    console.log("Successful");
}).catch((error) => {
    console.log(error);
});

// 3

db.collection("movies").doc("movie1").update({
    genres: firebase.firestore.FieldValue.arrayUnion("thriller")
}).then(() => {
    console.log("Successful");
}).catch((error) => {
    console.log(error);
});

// 4

db.collection("movies").doc("movie1").update({
    genres: firebase.firestore.FieldValue.arrayRemove("drama")
}).then(() => {
    console.log("Successful");
}).catch((error) => {
    console.log(error);
});

// 5

db.collection("movies").doc("movie1").update({
    "director.name": "Martin"
}).then(() => {
    console.log("Successful");
}).catch((error) => {
    console.log(error);
});

// 6

db.collection("movies").doc("movie1")
.get()
.then((doc => {
    if(doc.exists) {
        let data = doc.data();
        console.log("Successful" + " " + doc.id);
        console.log(data);
    } else {
        console.log("Error");
    }
})).catch((e) => {
    console.log(e);
})

db.collection("movies")
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(doc.id, data);
    }).catch(e => {
        console.log(e);
    })
})