let datum1 = new Date ("2024-01-26 17:00:00");
let datum2 = new Date ("2024-01-26 21:00:00");

db.collection("tasks")
.add({
    title: "Bootcamp Class",
    startDate: firebase.firestore.Timestamp.fromDate(datum1),
    dueDate: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Database Class"
})
.then(() => {
    console.log("Success!");
})
.catch((e) => {
    console.log(e);
})

DB.collection("tasks").doc(task1)
